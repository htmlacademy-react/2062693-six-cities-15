import {JSX} from 'react';
import Main from '../../pages/main/main.tsx';

const placesFound: number = 95;

export default function App (): JSX.Element {
  return (
    <Main placesFound={placesFound}/>
  );
}
