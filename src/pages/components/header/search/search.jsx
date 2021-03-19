import React from 'react';
import './search.css';

const Search = (props) => {
  return (
    <div className="searchContainer">
      <select className="filter">
        <option value="">Ordenar por</option>
        <option value="workerName">Nome</option>
        <option value="occupation">Cargo</option>
      </select>
      <input className="search" placeholder="Procurar"></input>
    </div>
  );
};

export default Search;
