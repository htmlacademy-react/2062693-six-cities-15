import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferType} from '../types/offer.ts';
import {ApiRoute, AuthorizationStatus} from '../const.ts';
import {loadOffers, requireAuthorization, setOffersLoadingScreen} from './actions.ts';
import {AuthData} from '../types/auth-data.ts';
import {AuthInfo} from '../types/auth-info.ts';
import {saveToken} from '../services/token.ts';

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

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthInfo>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);
