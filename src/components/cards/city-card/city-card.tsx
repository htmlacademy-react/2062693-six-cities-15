import React from 'react';
import {OfferType} from '../../../types/offer.ts';
import {Link} from 'react-router-dom';

type CityCardTypes = {
  offer: OfferType;
  setActive: (id: number) => void;
};

export default function CityCard({offer, setActive}: CityCardTypes): React.ReactElement {

  const onHoverHandler = () => {
    setActive(offer.id);
  };
  const onLeaveHandler = () => {
    setActive(0);
  };
  return (
    <article className="cities__card place-card" onMouseEnter={onHoverHandler} onMouseLeave={onLeaveHandler}>
      <Link to={`/offer/${offer.id}`}>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image"/>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: 80}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.name}
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </Link>
    </article>
  );
}
