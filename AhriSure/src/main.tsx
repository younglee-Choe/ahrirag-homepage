import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/page';

const BASENAME = '/AhriSure';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={BASENAME}>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
);
