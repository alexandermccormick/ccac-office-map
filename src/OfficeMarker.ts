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
    //this.marker.addEventListener("mouseout", (event) => {
    //  console.log("mouseover", event);
    //  this.marker.closePopup();
    //});
  }

  addTo(group: L.FeatureGroup) {
    this.marker.addTo(group);
  }
}

function popupTemplate(office: Office): string {
  return `
    <div>
      <h1 class="text-4xl">${office.title} Office</h1>
      <p>
        Phone:
        <a href="tel:+1${officeContact.phone.match(/\d/g)}">
          ${officeContact.phone}
        </a>
      </p>
      <p>
        Email:
        <a href="mailto:${officeContact.email}">
          ${officeContact.email}
        </a>
      </p>
    </div>
  `;
}

function tooltipTemplate(office: Office): string {
  return `
    <div>
      <h1 class="text-4xl">${office.title} Office</h1>
      <p>Click For Detailed View</p>
    </div>
  `;
}
