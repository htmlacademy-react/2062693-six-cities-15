import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {OfferType} from '../types/offer.ts';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<OfferType[]>('loadOffers');
