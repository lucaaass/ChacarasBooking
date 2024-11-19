
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReserveForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva feita para ${name} na chácara ${id} no dia ${date}.`);
  };

  return (
    <div className="reserve-form">
      <h1>Reserva para a Chácara {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Data:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <button type="submit" className="btn">Reservar</button>
      </form>
    </div>
  );
}

export default ReserveForm;
