import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offer.ts';

export const changeCity = createAction<string>('changeCity');

export const loadOffers = createAction<OfferType[]>('loadOffers');

export const setOffersLoadingScreen = createAction<boolean>('setOffersLoadingScreen');
