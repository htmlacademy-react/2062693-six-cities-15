import {JSX, useState} from 'react';
import OffersList from '../../components/cards/offers-list/offers-list.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import Map from '../../components/map/map.tsx';
import {useAppSelector} from '../../hooks';
import CityList from '../../components/city/city-list.tsx';

export default function Main(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const currenCity = useAppSelector((state) => state.city);
  const [activeOfferId, setActiveOfferId] = useState(0);
  const placesFound = offers.length;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${placesFound} places to stay in ${currenCity.name}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={offers} setActiveOffer={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <Map activeOfferId={activeOfferId} offers={offers} cityLocation={currenCity.location}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
