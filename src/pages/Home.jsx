
import React from 'react';
import { Link } from 'react-router-dom';
import ListChacaras from './ListChacaras';

function Home() {
  return (
    <div className="home">
      <div className='title'><h1>ChácarasBooking</h1></div>
      
      <ListChacaras />
    </div>
  );
}

export default Home;
