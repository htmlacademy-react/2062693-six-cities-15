export type OfferType = {
  id: number;
  name: string;
  image: string;
  smallImage: string;
  price: number;
  type: 'Room' | 'Apartment';
  rating: number;
  city: string;
};
