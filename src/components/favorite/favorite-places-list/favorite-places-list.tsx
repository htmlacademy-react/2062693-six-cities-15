import {OfferType} from '../../../types/offer.ts';
import CityCard from '../../cards/city-card/city-card.tsx';

type TFavoritePlacesList = {
  offers: OfferType[];
  setActiveOffer: (activeId: number) => void;
};

export default function FavoritePlacesList({offers, setActiveOffer}: TFavoritePlacesList) {

  const favoritePlaces = offers.reduce<string[]>((acc, offer) => {
    if (acc.includes(offer.city.name)) {
      return acc;
    }
    return [...acc, offer.city.name];
  }, []);

  return (
    <ul className="favorites__list">
      {favoritePlaces.map((item) => (
        <li key={item} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.filter((offer) => offer.city.name === item).map((offer) => (<CityCard key={offer.id} offer={offer} setActive={setActiveOffer} cardType={'favorites'}/>))}
          </div>
        </li>))}
    </ul>
  );
}
