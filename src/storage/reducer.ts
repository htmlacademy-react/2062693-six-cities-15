import {City} from '../types/city.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setOffersLoadingScreen} from './actions.ts';
import {OfferType} from '../types/offer.ts';
import {getCityByName} from '../offers-data.ts';
import {AuthorizationStatus, InitialCity} from '../const.ts';

type TInitialState = {
  city: City;
  offers: OfferType[];
  isLoadingOffers: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: TInitialState = {
  city: InitialCity,
  offers: [],
  isLoadingOffers: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
