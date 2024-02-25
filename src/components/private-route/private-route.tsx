import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

type PropTypes = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: PropTypes): JSX.Element {
  const {authorizationStatus, children} = props;
  return (authorizationStatus === AuthorizationStatus.NoAuth ? <Navigate to={AppRoute.Login}/> : children);
}
