
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ChacaraDetails() {
  const { id } = useParams();
  const [chacara, setChacara] = useState(null);

  useEffect(() => {
    fetch('/mock-chacaras.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedChacara = data.find((item) => item.id === parseInt(id));
        setChacara(selectedChacara);
      });
  }, [id]);

  if (!chacara) return <p>Carregando...</p>;

  return (
    
    <div className="chacara-details">
      <div>
      <Link to="/" className="btn">Voltar</Link>
      </div>
      <img src={chacara.image} alt={chacara.name} />
      <h1>{chacara.name}</h1>
      <p>{chacara.description}</p>
      <p>Preço: R${chacara.price}</p>
      <Link to={`/reserva/${chacara.id}`} className="btn">Reservar</Link>
    </div>
  );
}

export default ChacaraDetails;
