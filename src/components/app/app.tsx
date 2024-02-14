import React from 'react';
import Main from '../../pages/main/main.tsx';

const placesFound: number = 95;

export default function App (): React.ReactElement {
  return (
    <Main placesFound={placesFound}/>
  );
}
