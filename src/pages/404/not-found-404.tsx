import {JSX} from 'react';
import {Link} from 'react-router-dom';

export default function NotFound404(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={'/'} >На главную страницу</Link>
    </>
  );
}
