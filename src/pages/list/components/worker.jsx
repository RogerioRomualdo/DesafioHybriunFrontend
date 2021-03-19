import React from 'react';
import profilePicture from '../../../img/ppPlacaholder.png';
import './worker.css';

export const Worker = (props) => {
  return (
    <>
      <div className="displayFlex worker">
        {props?.workers?.map((worker) => (
          <div className="workerBox">
            <img className="profilePicture" src={profilePicture} alt="profile"></img>
            <h3 className="workerName">{worker.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Worker;
