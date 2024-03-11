import {OfferType} from '../../../types/offer.ts';
import FavoriteCard from '../favorite-card/favorite-card.tsx';

type TFavoritePlacesList = {
  offers: OfferType[];
};

export default function FavoritePlacesList({offers}: TFavoritePlacesList) {

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
            {offers.filter((offer) => offer.city.name === item).map((offer) => (<FavoriteCard key={offer.id} offer={offer}/>))}
          </div>
        </li>))}
    </ul>
  );
}
