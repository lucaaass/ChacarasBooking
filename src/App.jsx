
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListChacaras from './pages/ListChacaras';
import ChacaraDetails from './pages/ChacaraDetails';
import ReserveForm from './pages/ReserveForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chacaras" element={<ListChacaras />} />
      <Route path="/chacaras/:id" element={<ChacaraDetails />} />
      <Route path="/reserva/:id" element={<ReserveForm />} />
    </Routes>
  );
}

export default App;
