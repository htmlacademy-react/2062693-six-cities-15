import {City} from '../types/city.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setOffersLoadingScreen} from './actions.ts';
import {OfferType} from '../types/offer.ts';
import {getCityByName} from '../offers-data.ts';

const CURRENT_CITY: City = {
  name: 'Paris',
  location: {
    latitude: 48.85341,
    longitude: 2.3488,
    zoom: 10
  }
};

type TInitialState = {
  city: City;
  offers: OfferType[];
  isLoadingOffers: boolean;
}

const initialState: TInitialState = {
  city: CURRENT_CITY,
  offers: [],
  isLoadingOffers: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = getCityByName(action.payload);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingScreen, (state, action) => {
      state.isLoadingOffers = action.payload;
    });
});
