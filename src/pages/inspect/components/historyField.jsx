import React from 'react';
import FieldPropriety from './fieldPropriety';
import './historyField.css';

export const HistoryField = (props) => {
  return (
    <div className="fieldContainer">
      <h4 className="fieldHeader">{props.fieldHeader}</h4>
      <FieldPropriety fieldName={props.fieldNames[0]} fieldValue={props.fieldValues[0]} />
      <FieldPropriety fieldName={props.fieldNames[1]} fieldValue={props.fieldValues[1]} />
    </div>
  );
};

export default HistoryField;
