import {JSX} from 'react';
import Main from '../../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import NotFound404 from '../../pages/404/not-found-404.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';
import {Review} from '../../types/review.ts';
import {OfferType} from '../../types/offer.ts';
import Offer from '../../pages/offer/offer.tsx';

type AppPropTypes = {
  offers: OfferType[];
  reviews: Review[];
};

export default function App ({offers, reviews}: AppPropTypes): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorites offers={offers}/></PrivateRoute>} />
        <Route path={AppRoute.Offer} element={<Offer reviews={reviews} offers={offers} authorizationStatus={AuthorizationStatus.Auth}/>} />
        <Route path={AppRoute.NotFound} element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
