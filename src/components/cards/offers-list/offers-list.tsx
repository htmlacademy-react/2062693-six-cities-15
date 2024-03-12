import {PropsWithChildren} from 'react';
import CityCard from '../city-card/city-card.tsx';
import {OfferType} from '../../../types/offer.ts';

type TOffersList = PropsWithChildren<{
  offers: OfferType[];
  setActiveOffer: (activeId: number) => void;
}>

export default function OffersList({offers, setActiveOffer}: TOffersList) {

  const changeActiveElementHandler = (activeId: number) => {
    setActiveOffer(activeId);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard key={offer.id} offer={offer} setActive={changeActiveElementHandler} cardType={'cities'}/>
      ))}
    </div>
  );
}
