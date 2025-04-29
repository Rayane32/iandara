import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteList from './routes/route';

import { Header } from './componentes/header/Header.jsx';
import { Footer } from './componentes/Footer/Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <RouteList/>
    <Footer />
  </div>
  
);
