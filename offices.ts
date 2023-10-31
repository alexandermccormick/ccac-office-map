import type { GeoJSON } from "leaflet";

interface Office {
  title: string;
  address: Address;
  counties: Array<County>;
  insurancs: Array<string>;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: number;
}

interface County {
  title: string;
  geojson: GeoJSON | {};
}

export const officeContact = {
  phone: "(559) 272-4874",
  email: "admin@centralcalasthma.org"
}

export const offices: Array<Office> = [
  {
    title: "Modesto",
    address: {
      street: "1620 N Carpenter RD, Ste D-43",
      city: "Modesto",
      state: "CA",
      zipCode: 95351
    },
    counties: [
      {
        title: "Stanislaus",
        geojson: {}
      },
      {
        title: "San Joaquin",
        geojson: {}
      }
    ],
    insurancs: [
      "Health Plan of San Joaquin",
      "Health Net"
    ]
  },
  {
    title: "Bakersfield",
    address: {
      street: "1400 Chester Ave",
      city: "Bakersfield",
      state: "CA",
      zipCode: 93301
    },
    counties: [
      {
        title: "Kern",
        geojson: {}
      },
    ],
    insurancs: [
      "Kern Family Health Care",
      "Health Net",
      "kaiser"
    ]
  },
  {
    title: "Lamont",
    address: {
      street: "9009 Weedpatch Hwy, Ste B",
      city: "Lamont",
      state: "CA",
      zipCode: 93241
    },
    counties: [
      {
        title: "Kern",
        geojson: {}
      },
    ],
    insurancs: [
      "Kern Family Health Care",
      "Health Net",
      "kaiser"
    ]
  },
  {
    title: "Delano",
    address: {
      street: "375 S Dover Parkway, Ste C Unit 2",
      city: "Delano",
      state: "CA",
      zipCode: 93215
    },
    counties: [
      {
        title: "Kern",
        geojson: {}
      },
    ],
    insurancs: [
      "Kern Family Health Care",
      "Health Net",
      "kaiser"
    ]
  },
  {
    title: "Fresno",
    address: {
      street: "1939 North Gateway Blvd",
      city: "Fresno",
      state: "CA",
      zipCode: 93727
    },
    counties: [
      {
        title: "Fresno",
        geojson: {}
      },
      {
        title: "Madera",
        geojson: {}
      }
    ],
    insurancs: [
      "Anthem Blue Cross",
      "CalViva Health"
    ]
  },
  {
    title: "Visalia",
    address: {
      street: "410 W Center Ave, Ste 103",
      city: "Visalia",
      state: "CA",
      zipCode: 93291
    },
    counties: [
      {
        title: "Tulare",
        geojson: {}
      },
      {
        title: "Kings",
        geojson: {}
      }
    ],
    insurancs: [
      "Anthem Blue Cross",
      "CalViva Health (Tulare County)",
      "Health Net (Kigns County)"
    ]
  },
];
