import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteList from './routes/route';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    Header
    <RouteList/>
    Footer
  </div>
);
