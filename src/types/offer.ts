export type OfferType = {
  id: number;
  title: string;
  type: 'Room' | 'Apartment' | 'House' | 'Hotel';
  price: number;
  city: {
    name: string;
  };
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  countBedrooms: number;
  countAdults: number;
  houseItems: string[];
  rating: number;
};
