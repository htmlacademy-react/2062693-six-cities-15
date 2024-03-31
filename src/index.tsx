import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {offers} from './mocks/offers.ts';
import {reviews} from './mocks/review.ts';
import {Provider} from 'react-redux';
import {store} from './storage';
import {fetchOffers} from './storage/api-actions.ts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
