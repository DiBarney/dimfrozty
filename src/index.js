import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './components/Home';

const raiz = ReactDOM.createRoot(document.getElementById('root'));
raiz.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

