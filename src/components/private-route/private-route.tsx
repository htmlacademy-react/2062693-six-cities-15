import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';

type PropTypes = {
  children: JSX.Element;
}

export default function PrivateRoute(props: PropTypes): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {children} = props;
  return (authorizationStatus === AuthorizationStatus.NoAuth ? <Navigate to={AppRoute.Login}/> : children);
}
