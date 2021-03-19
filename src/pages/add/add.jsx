import React from 'react';
import '../base.css';
import './add.css';
import TopBar from '../components/topBar/topBar';
import SideBar from '../components/sideBar/sideBar';
import Header from '../components/header/header';
import InspectedWorker from '../components/inspectedWorker/inspectedWorker';

const Add = (props) => {
  return (
    <>
      <TopBar />
      <div className="displayFlex">
        <SideBar />
        <div className="mainArea w100">
          <Header hasButtons buttonTexts={['Cancelar', 'Salvar']} title="Adicionar colaborador" />
          <div className="displayFlex height100 inspectMain">
            <InspectedWorker edit add big></InspectedWorker>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
