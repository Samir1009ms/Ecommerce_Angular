export type Ar = IProduct[];

// export interface IProduct {
//   id: number;
//   name: string;
//   model: string;
//   price: string;
//   count: number;
//   rating: string;
//   info: string;
//   img: string[];
// }

export interface Ibasket {
  basket: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  model: string;
  price: number;
  count: number;
  rating: string;
  info: string;
  img: [src: string, alt?: string];
}

export interface Img {
  src: string;
  alt?: string;
}

export type AdresType = IAdres[];

export interface IAdres {
  fullName: string;
  streetName: string;
  city: string;
  state: string;
  country: string;
  id: number;
}

export type ICards = Icard[];

export interface Icard {
  fullName: string;
  card: string;
  date: string;
  cvc: string;
  id: number;
  cartType: string;
}
