import React from 'react';
import './secondSectionComponent.css';

export const SecondSectionComponent = (props) => {
  return (
    <div className="secondSectionComponentContainer">
      <h3 className="secondSectionName">{props.fieldName}</h3>
      {props.double ? (
        <h3 className="secondSectionValue">{`${props.fieldValue[0]} as ${props.fieldValue[1]}`}</h3>
      ) : (
        <h3 className="secondSectionValue">{props.fieldValue}</h3>
      )}
    </div>
  );
};

export default SecondSectionComponent;
