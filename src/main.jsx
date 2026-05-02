import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const pageKey = root?.dataset.page || 'home';

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App pageKey={pageKey} />
  </React.StrictMode>
);
