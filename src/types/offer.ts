import {LocationType} from './location.ts';
import {City} from './city.ts';

export type OfferType = {
  id: number;
  title: string;
  type: 'Room' | 'Apartment' | 'House' | 'Hotel';
  price: number;
  city: City;
  location: LocationType;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  countBedrooms: number;
  countAdults: number;
  houseItems: string[];
  rating: number;
};
