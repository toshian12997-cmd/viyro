import React from 'react';
import { createRoot } from 'react-dom/client';
import VeroApp from './VeroApp.jsx';
import './vero.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VeroApp />
  </React.StrictMode>
);
