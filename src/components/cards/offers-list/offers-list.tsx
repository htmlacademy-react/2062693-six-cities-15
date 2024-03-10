import {PropsWithChildren, useState} from 'react';
import CityCard from '../city-card/city-card.tsx';
import {OfferType} from '../../../types/offer.ts';

type TOffersList = PropsWithChildren<{ offers: OfferType[] }>

export default function OffersList({offers}: TOffersList) {

  const [activeOffer, setActiveOffer] = useState(0);

  const changeActiveElementHandler = (activeId: number) => {
    setActiveOffer(activeId);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard key={offer.id} offer={offer} activeOffer={activeOffer} setActive={changeActiveElementHandler}/>
      ))}
    </div>
  );
}
