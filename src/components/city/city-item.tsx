import {PropsWithChildren} from 'react';
import {changeCity} from '../../storage/actions.ts';
import {useAppDispatch} from '../../hooks';

type TCityItem = PropsWithChildren<{
  cityName: string;
  isActive: boolean;
}>

export default function CityItem({cityName, isActive}: TCityItem) {
  const dispatch = useAppDispatch();
  const cityChangeHandle = () => {
    dispatch(changeCity(cityName));
  };
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} href="#" onClick={cityChangeHandle}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}
