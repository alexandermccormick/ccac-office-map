import { fresno, kern, kings, madera, sanJoaquin, stanislaus, tulare } from "./Counties";
import { colors } from "./Colors";
import type { County } from "./Counties";

export interface Office {
  title: string;
  color: string;
  className: string;
  coordinates: Array<number>;
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

export const officeContact = {
  phone: "(559) 272-4874",
  email: "admin@centralcalasthma.org"
}

//export const offices: Array<Office> = _offices;
export const offices: Array<Office> = [
  {
    title: "Modesto",
    color: colors.sanJoaquin,
    className: "san-joaquin",
    coordinates: [37.6598898372289, -121.02975140196665],
    address: {
      street: "1620 N Carpenter RD, Ste D-43",
      city: "Modesto",
      state: "CA",
      zipCode: 95351
    },
    counties: [
      sanJoaquin,
      stanislaus
    ],
    insurancs: [
      "Health Plan of San Joaquin",
      "Health Net"
    ]
  },
  {
    title: "Bakersfield",
    color: colors.kern,
    className: "kern",
    coordinates: [35.370701643705374, -119.01827716183341],
    address: {
      street: "1400 Chester Ave",
      city: "Bakersfield",
      state: "CA",
      zipCode: 93301
    },
    counties: [
      kern
    ],
    insurancs: [
      "Kern Family Health Care",
      "Health Net",
      "kaiser"
    ]
  },
  {
    title: "Lamont",
    color: colors.kern,
    className: "kern",
    coordinates: [35.27308527307525, -118.91391022119583],
    address: {
      street: "9009 Weedpatch Hwy, Ste B",
      city: "Lamont",
      state: "CA",
      zipCode: 93241
    },
    counties: [
      kern
    ],
    insurancs: [
      "Kern Family Health Care",
      "Health Net",
      "kaiser"
    ]
  },
  {
    title: "Delano",
    color: colors.kern,
    className: "kern",
    coordinates: [35.75487467276078, -119.24986314042047],
    address: {
      street: "375 S Dover Parkway, Ste C Unit 2",
      city: "Delano",
      state: "CA",
      zipCode: 93215
    },
    counties: [
      kern
    ],
    insurancs: [
      "Kern Family Health Care",
      "Health Net",
      "kaiser"
    ]
  },
  {
    title: "Administrative",
    color: colors.fresno,
    className: "fresno",
    coordinates: [36.767994238365894, -119.72770559692866],
    address: {
      street: "1939 North Gateway Blvd",
      city: "Fresno",
      state: "CA",
      zipCode: 93727
    },
    counties: [
      fresno,
      madera
    ],
    insurancs: [
      "Anthem Blue Cross",
      "CalViva Health"
    ]
  },
  {
    title: "Visalia",
    color: colors.kings,
    className: "kings",
    coordinates: [36.333140494955636, -119.29930637795711],
    address: {
      street: "410 W Center Ave, Ste 103",
      city: "Visalia",
      state: "CA",
      zipCode: 93291
    },
    counties: [
      kings,
      tulare
    ],
    insurancs: [
      "Anthem Blue Cross",
      "CalViva Health (Tulare County)",
      "Health Net (Kings County)"
    ]
  },
];

