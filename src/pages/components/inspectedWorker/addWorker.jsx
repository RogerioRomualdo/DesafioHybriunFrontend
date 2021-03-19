import React from 'react';
import profilePicture from '../../../img/ppPlacaholder.png';
import './inspectedWorker.css';
import FirstSectionComponent from '../inspectedWorker/firstSectionComponent';
import SecondSectionComponent from '../../inspect/components/secondSectionComponent';

export const addWorker = (props) => {
  return (
    <div className="workerContainer">
      <div>
        <div className="displayFlexCenter">
          <img className="pp2" src={profilePicture} alt="profile"></img>
          <div className="displayFlexColumn">
            <h3 className="workerName">{props.edit ? 'Campo Editável' : 'Nome do colaborador'}</h3>
            <h3 className="createdAt">Cadastrado em {props.createdAt}</h3>
          </div>
        </div>

        <div className="displayFlexColumn">
          <h2 className="subHeader">{props.edit ? 'Informações' : 'Informação Pessoal'}</h2>

          <div className="displayFlexBreak2">
            <FirstSectionComponent edit fieldName="CPF" fieldValue="123465789" />
            <FirstSectionComponent edit fieldName="Email" fieldValue="roger@fake" />
            <FirstSectionComponent edit fieldName="Telefone" fieldValue="984411231" />
          </div>

          <div className="displayFlexBreak2">
            <SecondSectionComponent fieldName="Ocupação" fieldValue="Vendedor" />
            <SecondSectionComponent double fieldName="Horário de Expediente" fieldValue={['8:30', '17:30']} />
            <SecondSectionComponent double fieldName="Horário de Almoço" fieldValue={['12:00', '13:00']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default addWorker;
