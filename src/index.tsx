import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {offers} from './mocks/offers.ts';
import {reviews} from './mocks/review.ts';
import {Provider} from 'react-redux';
import {store} from './storage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
