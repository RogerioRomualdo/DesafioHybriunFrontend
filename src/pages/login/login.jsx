import React, {useState} from 'react';
import './login.css';
import eye from '../../img/eye.png';

export default (props) => {
  const [varType, setVarType] = useState('password');

  return (
    <div className="Container">
      <div className="welcomeText">
        <div className="upperText">
          <h1>Seja bem vindo</h1>
          <h2>Para continuar por favor faça login</h2>
        </div>
        <div className="lowerText">
          <h3>Logotipo</h3>
        </div>
      </div>
      <div className="loginBox">
        <div className="boxContainer">
          <h1>Utilize o painel agora mesmo</h1>
          <input placeholder="Digite seu email"></input>
          <div className="centerInput">
            <div className="password">
              <input type={varType} placeholder="Digite sua senha"></input>
              <img
                src={eye}
                className="eye"
                onClick={() => {
                  varType === 'text' ? setVarType('password') : setVarType('text');
                }}
              />
            </div>
          </div>
          <h3>Esqueci minha senha</h3>
          <button className="submit">Entrar</button>
        </div>
      </div>
    </div>
  );
};
