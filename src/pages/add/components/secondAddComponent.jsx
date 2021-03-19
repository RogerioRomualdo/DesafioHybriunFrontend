import React from 'react';
import './secondAddComponent.css';

export const SecondAddComponent = (props) => {
  return (
    <div className="secondAddComponentContainer">
      <h3 className="secondAddName">{props.fieldName}</h3>
      {props.double ? (
        <div className="inputFlexBox">
          <input className="secondAddInput" placeholder={props.placeholder[0]} />
          <input className="secondAddInput" placeholder={props.placeholder[1]} />
        </div>
      ) : (
        <input className="secondAddInput" placeholder={props.placeholder}></input>
      )}
    </div>
  );
};

export default SecondAddComponent;
