import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferType} from '../types/offer.ts';
import {ApiRoute} from '../const.ts';
import {loadOffers, setOffersLoadingScreen} from './actions.ts';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_args, {dispatch, extra: api}) =>{
    const {data} = await api.get<OfferType[]>(ApiRoute.Offers);
    dispatch(setOffersLoadingScreen(true));
    dispatch(loadOffers(data));
    dispatch(setOffersLoadingScreen(false));
  }
);
