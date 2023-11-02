import L from "leaflet";
import { officeContact } from './Offices';
import type { Office } from "./Offices";

export class OfficeMarker {
  private marker: L.Marker;
  private popup: L.Popup;
  private tooltip: L.Tooltip;

  constructor(office: Office) {
    const myIcon = L.divIcon({
      className: `map-marker-icon ${office.className}`,
    });


    this.marker = L.marker(office.coordinates as L.LatLngTuple, {
      icon: myIcon,
    });
    
    this.popup = L.popup({
      offset: new L.Point(10, 5),
      content: popupTemplate(office)
    });

    this.tooltip = L.tooltip({
      offset: new L.Point(10, 5),
      opacity: 1,
      content: tooltipTemplate(office)
    })

    
    this.marker.bindTooltip(this.tooltip);
    this.marker.bindPopup(this.popup);

    this.marker.addEventListener("click", () => {
      if (this.tooltip.isOpen()) {
        this.marker.closeTooltip();
      }
    });
    this.marker.addEventListener("mouseover", () => {
      if (this.popup.isOpen()) {
        this.marker.closeTooltip();
      }
    });
  }

  addTo(group: L.FeatureGroup) {
    this.marker.addTo(group);
  }
}

function popupTemplate(office: Office): string {
  return `
    <div>
      <h1 class="text-4xl font-bold">${office.title} Office</h1>
      <p class="flex justify-start items-center align-middle gap-2">
        <span class="phone-icon bg-black"></span>
        <a href="tel:+1${officeContact.phone.match(/\d/g)}" class="text-lg">
          ${officeContact.phone}
        </a>
      </p>
      <p class="flex justify-start items-center align-middle gap-2">
        <span class="email-icon bg-black"></span>
        <a href="mailto:${officeContact.email}" class="text-lg">
          ${officeContact.email}
        </a>
      </p>
    </div>
  `;
}

function tooltipTemplate(office: Office): string {
  return `
    <div class="p-2 text-center">
      <h1 class="text-2xl font-semibold">${office.title} Office</h1>
      <p class="text-lg">Select For Detailed View</p>
    </div>
  `;
}
