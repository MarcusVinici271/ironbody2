import React from 'react';
import './Plan.css'; // Importando o arquivo CSS

export default function PlanoMensalidade ({ titulo, preco, descricao }){
  return (
  <div className="plano">
    <h2>{titulo}</h2>
    <h3>{preco}</h3>
    <p>{descricao}</p>
  </div>
);
  
  }
