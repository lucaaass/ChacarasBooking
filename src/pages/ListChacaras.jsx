
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListChacaras() {
  const [chacaras, setChacaras] = useState([]);

  useEffect(() => {
    fetch('/mock-chacaras.json')
      .then((response) => response.json())
      .then((data) => setChacaras(data));
  }, []);

  return (
    <div className="list-chacaras">
      <h1> Chácaras Disponiveis</h1>
      <div className="chacara-grid">
        {chacaras.map((chacara) => (
          <div key={chacara.id} className="chacara-card">
            <div className='imagem'>
            <img src={chacara.image} alt={chacara.name} />
            <h2>{chacara.name}</h2>
              </div>
            <p>{chacara.description}</p>
            <Link to={`/chacaras/${chacara.id}`} className="btn">Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListChacaras;
