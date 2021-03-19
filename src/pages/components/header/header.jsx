import React from 'react';
import './header.css';
import Search from './search/search';

const Header = (props) => {
  return (
    <>
      <div className="mainHeaderContainer">
        <h2 className="headerText">{props.title}</h2>
        {props.hasButtons ? (
          <div className="buttonsContainer">
            <button className="buttonStyle red">{props.buttonTexts[0]}</button>
            <button className="buttonStyle blue">{props.buttonTexts[1]}</button>
          </div>
        ) : null}
      </div>
      <hr className="endOfHeader"></hr>
      {props.hasSearch ? <Search /> : null}
    </>
  );
};

export default Header;
