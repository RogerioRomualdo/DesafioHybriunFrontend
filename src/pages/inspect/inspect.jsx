import React from 'react';
import '../base.css';
import './inspect.css';
import TopBar from '../components/topBar/topBar';
import SideBar from '../components/sideBar/sideBar';
import Header from '../components/header/header';
import InspectedWorker from '../components/inspectedWorker/inspectedWorker';
import HistoryEntry from './components/historyEntry';

const Inspect = (props) => {
  return (
    <>
      <TopBar />
      <div className="displayFlex">
        <SideBar />
        <div className="mainArea w100">
          <Header hasButtons buttonTexts={['Inativar colaborador', 'Editar colaborador']} title="Detalhes do colaborador" />
          <div className="displayFlex height100 inspectMain">
            <InspectedWorker></InspectedWorker>
            <div className="mainInspectArea">
              <div className="mainAreaHeaderContainer">
                <h2 className="mainAreaHeader">Hitórico de Entrada e Saída</h2>
              </div>
              <div className="historyContainer">
                <HistoryEntry />
                <HistoryEntry />
                <HistoryEntry />
                <HistoryEntry />
                <HistoryEntry />
                <HistoryEntry />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inspect;
