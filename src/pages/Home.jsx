
import React from 'react';
import { Link } from 'react-router-dom';
import ListChacaras from './ListChacaras';

function Home() {
  return (
    <div className="home">
      <h1>ChácarasBooking</h1>
      <ListChacaras />
    </div>
  );
}

export default Home;
