import {City} from './types/city.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CitiesNames: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85341,
      longitude: 2.3488,
      zoom: 10
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 10
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    }
  },
  {
    name: 'Dusseldor',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10
    }
  },
];

export const InitialCity: City = {
  name: 'Paris',
  location: {
    latitude: 48.85341,
    longitude: 2.3488,
    zoom: 10
  }
};
