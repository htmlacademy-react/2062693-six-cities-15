import {JSX} from 'react';
import Main from '../../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound404 from '../../pages/404/not-found-404.tsx';
import {AppRoute} from '../../const.ts';

const placesFound: number = 95;

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Main placesFound={placesFound}/>} />
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.FAVORITES} element={<Favorites />} />
        <Route path={AppRoute.OFFER} element={<Offer />} />
        <Route path={AppRoute.NOT_FOUND} element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
