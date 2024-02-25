import {JSX} from 'react';
import Main from '../../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound404 from '../../pages/404/not-found-404.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';

const placesFound: number = 95;

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placesFound={placesFound}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites /></PrivateRoute>} />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path={AppRoute.NotFound} element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
