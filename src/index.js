import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteList from './routes/route';
import Header from './components/header';
import Footer from './components/footer';
import Mapa from './components/map';
import Card from './components/card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    {/* <RouteList/> */}
    <div id='map'>
      <Mapa className="map-container"/>
      <Card/>
    </div>
    <Footer/>
  </div>
);
