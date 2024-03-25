import {City} from './types/city.ts';
import {OfferType} from './types/offer.ts';
import {offers} from './mocks/offers.ts';
import {CitiesNames, InitialCity} from './const.ts';

export function getOffersByCity(city: City): OfferType[] {
  return offers.filter((offer) => offer.city.name === city.name);
}

export function getCityByName(cityName: string): City {
  const city = CitiesNames.find((item) => item.name === cityName);
  if (city === undefined) {
    return InitialCity;
  }
  return city;
}
