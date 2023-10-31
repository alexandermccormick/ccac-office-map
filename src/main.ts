import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import leafletStyles from "leaflet/dist/leaflet.css?inline";
import "./style.css";
import { InteractiveMap } from "./InteractiveMap";
import mapMarkerIcon from "./assets/map-marker.svg?raw";

const markerIcon = `data:image/svg+xml;base64,${window.btoa(mapMarkerIcon)}`;

@customElement('office-map')
export class OfficeMap extends LitElement {
  static override styles = unsafeCSS(leafletStyles + `
    :host {
      display: block;
      border: solid 1px gray;
    }

    .map-container {
      width: 100%;
      height: 100%;
    }

    .map-marker-icon {
      display: inline-block;
      background-color: #000;
      -webkit-mask: url(${markerIcon}) center/1rem 1rem no-repeat;
      mask: url(${markerIcon}) center/1rem 1rem no-repeat;
      width: 20px !important;
      height: 20px !important;
    }

  `);

  private mapController: InteractiveMap = new InteractiveMap();

  override connectedCallback() {
    super.connectedCallback();

    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");

    this.shadowRoot?.appendChild(mapContainer);

    this.mapController.initializeMap(mapContainer);

    this.mapController.addMarkers(true);

    this.mapController.recenter();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'office-map': OfficeMap;
  }
}
