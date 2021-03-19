import React from 'react';
import './historyEntry.css';
import HistoryField from './historyField';

export const HistoryEntry = () => {
  return (
    <div className="historyEntryContainer">
      <div className="historyDate">
        <h1 className="historyDateValue">25</h1>
        <h3 className="historyDateMonth">Dezembro</h3>
      </div>
      <div className="historyMainContentContainer">
        <HistoryField fieldHeader="Expediente" fieldNames={['Entrou', 'Saiu']} fieldValues={['8:30', '18:00']} />
        <HistoryField fieldHeader="Almoço" fieldNames={['Entrou', 'Saiu']} fieldValues={['12:00', '13:00']} />
      </div>
    </div>
  );
};

export default HistoryEntry;
