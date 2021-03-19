import React from 'react';
import './topBar.css';
import Options from '../../../img/options.png';
import Bell from '../../../img/bell.png';
import Notification from '../../../img/notification.png';
import Blocks from '../../../img/blocks.png';
import PP from '../../../img/ppPlacaholder.png';

const topBar = (props) => {
  return (
    <div className="topBar">
      <div className="optionsContainer">
        <img className="options" src={Options} alt="" />
      </div>
      <div className="notificationContainer">
        <img className="bell" src={Bell} alt="" />
        <img className="notification" src={Notification} alt="" />
        <h6 className="notificationNumber">3</h6>
      </div>
      <div className="blocksContainer">
        <img className="blocks" src={Blocks} alt="" />
        <h3 className="name">Nome da Pessoa</h3>
      </div>
      <div className="imgContainer">
        <img className="profilePicture" src={PP} alt="Profile" />
      </div>
    </div>
  );
};

export default topBar;
