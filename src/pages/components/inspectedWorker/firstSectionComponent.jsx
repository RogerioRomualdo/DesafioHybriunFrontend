import React from 'react';
import './firstSectionComponent.css';

export const FirstSectionComponent = (props) => {
  return (
    <div className="firstSectionComponent">
      <h3 className="firstSectionFieldName">{props.fieldName}</h3>
      {!props.edit ? (
        <h4 className="firstSectionFieldValue">{props.fieldValue}</h4>
      ) : (
        <input className="firstSectionInput" placeholder={props.placeholder} />
      )}
    </div>
  );
};

export default FirstSectionComponent;
