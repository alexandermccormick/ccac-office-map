import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import leafletStyles from "leaflet/dist/leaflet.css?inline";
import styles from "./styles.css?inline";
import "./styles.css";
import { InteractiveMap } from "./InteractiveMap";
import emailSvg from "./assets/email.svg";
import insuranceSVG from "./assets/insurance.svg";
import mapMarkerIcon from "./assets/map-marker.svg";
import phoneSvg from "./assets/phone.svg";
import {colors} from './Colors';

@customElement('office-map')
export class OfficeMap extends LitElement {
  static override styles = unsafeCSS(styles + leafletStyles + `
    :host {
      display: block;
      border: solid 1px gray;
    }

    .map-container {
      width: 100%;
      height: 100%;
    }

    .map-marker-icon {
      --container-size: 28px;
      --marker-size: calc(var(--container-size) * 0.98);

      display: inline-block;
      -webkit-mask: url(${mapMarkerIcon}) center/var(--marker-size) var(--marker-size) no-repeat;
      mask: url(${mapMarkerIcon}) center/var(--marker-size) var(--marker-size) no-repeat;
      width: var(--container-size) !important;
      height: var(--container-size) !important;
    }

    .email-icon {
      --container-size: 28px;
      --marker-size: calc(var(--container-size) * 0.98);

      display: inline-block;
      -webkit-mask: url(${emailSvg}) center/var(--marker-size) var(--marker-size) no-repeat;
      mask: url(${emailSvg}) center/var(--marker-size) var(--marker-size) no-repeat;
      width: var(--container-size) !important;
      height: var(--container-size) !important;
    }

    .insurance-icon {
      --container-size: 28px;
      --marker-size: calc(var(--container-size) * 0.98);

      display: inline-block;
      -webkit-mask: url(${insuranceSVG}) center/var(--marker-size) var(--marker-size) no-repeat;
      mask: url(${insuranceSVG}) center/var(--marker-size) var(--marker-size) no-repeat;
      width: var(--container-size) !important;
      height: var(--container-size) !important;
    }

    .phone-icon {
      --container-size: 28px;
      --marker-size: calc(var(--container-size) * 0.98);

      display: inline-block;
      -webkit-mask: url(${phoneSvg}) center/var(--marker-size) var(--marker-size) no-repeat;
      mask: url(${phoneSvg}) center/var(--marker-size) var(--marker-size) no-repeat;
      width: var(--container-size) !important;
      height: var(--container-size) !important;
    }

    .base-icon {
      background-color: ${colors.base};
    }

    .fresno {
      background-color: ${colors.fresno};
    }

    .kern {
      background-color: ${colors.kern};
    }


    .kings {
      background-color: ${colors.kings};
    }

    .san-joaquin {
      background-color: ${colors.sanJoaquin};
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
