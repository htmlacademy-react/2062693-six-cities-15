import {City} from '../types/city.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './actions.ts';
import {getCityByName, getOffersByCity} from '../offers-data.ts';

const CURRENT_CITY: City = {
  name: 'Paris',
  location: {
    latitude: 48.85341,
    longitude: 2.3488,
    zoom: 10
  }
};

const initialState = {
  city: CURRENT_CITY,
  offers: getOffersByCity(CURRENT_CITY)
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = getCityByName(action.payload);
    })
    .addCase(loadOffers, (state) => {
      state.offers = getOffersByCity(state.city);
    });
});
