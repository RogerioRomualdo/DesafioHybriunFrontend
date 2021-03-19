import React from 'react';
import profilePicture from '../../../img/ppPlacaholder.png';
import './inspectedWorker.css';
import FirstSectionComponent from '../inspectedWorker/firstSectionComponent';
import SecondSectionComponent from '../../inspect/components/secondSectionComponent';
import SecondAddComponent from '../../add/components/secondAddComponent';

export const InspectedWorker = (props) => {
  return (
    <div className={!props.big ? 'workerContainer' : 'bigWorkerContainer'}>
      <div>
        <div className="displayFlexCenter">
          <img className="pp2" src={profilePicture} alt="profile"></img>
          {!props.edit ? (
            <div className="displayFlexColumn">
              <h3 className="workerName">Nome do colaborador</h3>
              <h3 className="createdAt">Cadastrado em {props.createdAt}</h3>
            </div>
          ) : (
            <div className="workerInputContainer">
              <input className="workerNameInput" placeholder="Nome do colaborador"></input>
            </div>
          )}
        </div>

        <div className="displayFlexColumn">
          <h2 className="subHeader">{props.edit ? 'Informações' : 'Informação Pessoal'}</h2>

          {!props.edit ? (
            <div className="displayFlexBreak2">
              <FirstSectionComponent fieldName="CPF" fieldValue="123465789" />
              <FirstSectionComponent fieldName="Email" fieldValue="roger@fake" />
              <FirstSectionComponent fieldName="Telefone" fieldValue="984411231" />
            </div>
          ) : (
            <div className="displayFlexBreak2">
              <FirstSectionComponent edit fieldName="CPF" placeholder="Digite o CPF" />
              <FirstSectionComponent edit fieldName="Email" placeholder="Digite o Email" />
              <FirstSectionComponent edit fieldName="Telefone" placeholder="(xx) x xxxx-xxxx" />
            </div>
          )}

          {!props.add ? (
            <div className="displayFlexBreak2">
              <SecondSectionComponent fieldName="Ocupação" fieldValue="Vendedor" />
              <SecondSectionComponent double fieldName="Horário de Expediente" fieldValue={['8:30', '17:30']} />
              <SecondSectionComponent double fieldName="Horário de Almoço" fieldValue={['12:00', '13:00']} />
            </div>
          ) : (
            <div className="displayFlexBreak2">
              <SecondAddComponent fieldName="Ocupação" placeholder="Ocupação" />
              <SecondAddComponent
                double
                fieldName="Horário de Expediente"
                placeholder={['Horário de entrada', 'Horário de Saída']}
              />
              <SecondAddComponent double fieldName="Horário de Almoço" placeholder={['Horário de entrada', 'Horário de Saída']} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InspectedWorker;
