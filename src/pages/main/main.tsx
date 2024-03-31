import {JSX, useState} from 'react';
import OffersList from '../../components/cards/offers-list/offers-list.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import Map from '../../components/map/map.tsx';
import {useAppSelector} from '../../hooks';
import CityList from '../../components/city/city-list.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import {HeaderNavigation} from '../../components/header-navigation/header-navigation.tsx';

export default function Main(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const currenCity = useAppSelector((state) => state.city);
  const isLoadingOffers = useAppSelector((state) => state.isLoadingOffers);
  const filteredOffers = offers.filter((offer) => offer.city.name === currenCity.name);
  const [activeOfferId, setActiveOfferId] = useState(0);
  const placesFound = filteredOffers.length;
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
            <HeaderNavigation />
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
              {isLoadingOffers && <Spinner />}
              {!isLoadingOffers && <OffersList offers={filteredOffers} setActiveOffer={setActiveOfferId}/>}
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
