import L from "leaflet";
import { offices } from './Offices';
import type { Map as LeafletMap, MapOptions } from "leaflet";
import {OfficeMarker} from "./OfficeMarker";

const mapSettings: MapOptions = {
  zoom: 8,
  maxZoom: 18,
};

const tooltipOptions = {
  offset: new L.Point(10, 0),
  opacity: 1,
};

export class InteractiveMap {
  /**
   * A reference to the instance, should one exist already
   */
  private static instance: InteractiveMap;

  /**
   * A reference to the Leaflet map instance
   */
  private _map?: LeafletMap;

  /**
   * A reference to the feature group container the map markers
   */
  private markerGroup = L.featureGroup();

  /**
   * Returns the current instance of the interactive map,
   * shuld one exist
   */
  constructor() {
    if (InteractiveMap.instance) {
      return InteractiveMap.instance;
    }
  }

  /**
   * A wrapper to prevent accessing the map instance prior to initialization
   */
  private get map() {
    if (!this._map) {
      throw new Error("Attempted to access map instance prior to initialization");
    }
    return this._map;
  }

  /**
   * A wrapper to set the reference of the map instance
   */
  private set map(map: LeafletMap) {
    this._map = map;
  }

  /**
   * Initializes the map instance
   *
   * @param target - The mount point for the map instance
   *
   * @privateRemarks
   * All laysers should be initialized here
   */
  initializeMap(target: HTMLElement) {
    this.map = L.map(target, mapSettings);

    this.markerGroup.addTo(this.map);

    L.tileLayer("https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key={apiKey}", {
      //@ts-ignore - apiKey does not exist on TileLayerOptions
      apiKey: import.meta.env.VITE_MAPTILER_KEY,
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(this.map);
  }

  addMarkers(countyBoundries: boolean) {
    for (let office of offices) {
      const marker = new OfficeMarker(office);
      marker.addTo(this.markerGroup);

      if (countyBoundries) {
        for (let county of office.counties) {
          county.addTo(this.map, {
            style: { color: office.color }
          });
        }
      }
    }
  }

  /**
   * Recenter and zoom in to a given point. If no point is provided,
   * reset the zoom level
   *
   * @param coords - The desired point to center on
   */
  recenter() {
    this.map.fitBounds(this.markerGroup.getBounds());
  }

}
