import L from "leaflet";
import { officeContact } from './Offices';
import { isCaresMode } from './Mode';
import type { Office } from "./Offices";

export class OfficeMarker {
  private marker: L.Marker;
  private popup: L.Popup;
  private tooltip: L.Tooltip;

  constructor(office: Office) {
    const iconClass = isCaresMode ? office.className : "base-icon";
    const myIcon = L.divIcon({
      className: `map-marker-icon ${iconClass}`,
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
  const { city, state, street, street2, zipCode } = office.address;
  const addressLine = `${street}, ${street2 || ""} ${city}, ${state}, ${zipCode}`;
  return `
    <div>
      <h1 class="text-center text-4xl font-bold">${office.title} Office</h1>
      ${caresPopupTemplate(office)}
      <p class="flex justify-start items-center align-middle gap-2">
        <span class="phone-icon bg-gray-600"></span>
        <a href="tel:+1${officeContact.phone.match(/\d/g)}" class="text-lg">
          ${officeContact.phone}
        </a>
      </p>
      <p class="flex justify-start items-center align-middle gap-2">
        <span class="email-icon bg-gray-600"></span>
        <a href="mailto:${officeContact.email}" class="text-lg">
          ${officeContact.email}
        </a>
      </p>
      <p class="flex justify-start items-center align-middle gap-2 text-lg leading-none">
        <span class="map-marker-icon bg-gray-600"></span>
        <a href="https://maps.google.com/?q=${addressLine}" target="_blank">
          <a href="https://maps.apple.com/maps?q=${addressLine}" target="_blank">
            ${street}
            <br />
            ${
              street2 ? (street2 + "<br/ >") : ""
            }
            ${city}, ${state} ${zipCode}
          </a>
        </a>
      </p>
    </div>
  `;
}

function caresPopupTemplate(office: Office): string | void {
  if (!isCaresMode) {
    return "";
  }

  const insuranceTemplates = office.insurancs
    .map(insurance => `<span class="text-sm font-semibold">${insurance}</span>`);

  return `
    <div class="relative flex flex-col justify-center items-center p-2 mt-2 border-2 border-gray-600">
      <div class="bg-white inline-block absolute -top-3 -left-2 h-7 w-7">
        <span class="insurance-icon bg-red-900"></span>
      </div>
      ${insuranceTemplates.join("\n")}
    </div>
  `;
}

function tooltipTemplate(office: Office): string {
  return `
    <div class="p-2 text-center">
      <h1 class="text-2xl font-semibold">${office.title} Office</h1>
      <p class="text-lg text-gray-600">Click For Detailed View</p>
    </div>
  `;
}
