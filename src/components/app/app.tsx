import {JSX} from 'react';
import Main from '../../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound404 from '../../pages/404/not-found-404.tsx';

const placesFound: number = 95;

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<Main placesFound={placesFound}/>} />
          <Route path={'login'} element={<Login />} />
          <Route path={'favorites'} element={<Favorites />} />
          <Route path={'offer/:id'} element={<Offer />} />
        </Route>
        <Route path={'*'} element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
