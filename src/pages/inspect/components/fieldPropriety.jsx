import React from 'react';
import './fieldPropriety.css';

export const FieldPropriety = (props) => {
  return (
    <div className="fieldPropriety">
      <h5 className="fieldProprietyName">{props.fieldName}</h5>
      <h5 className="fieldProprietyValue">{props.fieldValue}</h5>
    </div>
  );
};

export default FieldPropriety;
