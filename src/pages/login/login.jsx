import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import api from '../../api';
import './login.css';
import eye from '../../img/eye.png';
import {Formik} from 'formik';

const Login = (props) => {
  const [varType, setVarType] = useState('password');

  const submit = async (values) => {
    try {
      const res = await api.post('/auth', {
        email: values.email,
        password: values.password,
      });
      if (res.status !== 200) throw new Error('N deu 200');
      localStorage.setItem('token', res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={submit}
            render={({values, handleChange, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Digite seu email" value={values.email} onChange={handleChange}></input>

                <div className="centerInput">
                  <div className="password">
                    <input
                      name="password"
                      type={varType}
                      placeholder="Digite sua senha"
                      value={values.password}
                      onChange={handleChange}></input>
                    <img
                      src={eye}
                      alt="Eye"
                      className="eye"
                      onClick={() => {
                        varType === 'text' ? setVarType('password') : setVarType('text');
                      }}
                    />
                  </div>
                </div>
                <h3>Esqueci minha senha</h3>
                <button className="submit">Entrar</button>
              </form>
            )}></Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
