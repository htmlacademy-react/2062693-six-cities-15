import {PropsWithChildren} from 'react';
import {useDispatch} from 'react-redux';
import {changeCity, loadOffers} from '../../storage/actions.ts';

type TCityItem = PropsWithChildren<{
  cityName: string;
  isActive: boolean;
}>

export default function CityItem({cityName, isActive}: TCityItem) {
  const dispatch = useDispatch();
  const cityChangeHanle = () => {
    dispatch(changeCity(cityName));
    dispatch(loadOffers());
  };
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} href="#" onClick={cityChangeHanle}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}
