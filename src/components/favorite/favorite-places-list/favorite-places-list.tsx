import {OfferType} from '../../../types/offer.ts';
import CityCard from '../../cards/city-card/city-card.tsx';
import {useState} from 'react';

type TFavoritePlacesList = {
  offers: OfferType[];
};

export default function FavoritePlacesList({offers}: TFavoritePlacesList) {

  const [activeOfferId, setActiveOfferId] = useState(0);
  let currentCity: string = '';
  const favoritePlaces = offers.reduce<string[]>((acc, offer) => {
    if (acc.includes(offer.city.name)) {
      return acc;
    }
    return [...acc, offer.city.name];
  }, []);
  if (activeOfferId) {
    const currentOffer = offers.find((offer) => offer.id === activeOfferId);
    if (currentOffer) {
      currentCity = currentOffer.city.name;
    }
  } else {
    currentCity = '';
  }

  return (
    <ul className="favorites__list">
      {favoritePlaces.map((item) => (
        <li key={item} className="favorites__locations-items">
          <div className={`favorites__locations locations ${currentCity === item ? 'locations--current' : ''}`}>
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.filter((offer) => offer.city.name === item).map((offer) => (<CityCard key={offer.id} offer={offer} setActive={setActiveOfferId} cardType={'favorites'}/>))}
          </div>
        </li>))}
    </ul>
  );
}
