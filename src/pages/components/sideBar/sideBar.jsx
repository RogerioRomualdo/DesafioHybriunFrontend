import React from 'react';
import './sideBar.css';
import Options from '../../../img/options.png';
import Add from '../../../img/add.png';

const sideBar = (props) => {
  return (
    <div className="sideBar">
      <div className="sideOptionsContainer">
        <img className="sideOptions" src={Options} alt="" />
        <h3>Listagem de Colaboradores</h3>
      </div>
      <hr className="bar" />
      <div className="addContainer">
        <img className="add" src={Add} alt="" />
        <h3>Adicionar um Colaborador</h3>
      </div>
    </div>
  );
};

export default sideBar;
