import React, {useEffect, useState} from 'react';
import api from '../../api';
import '../base.css';
import './list.css';
import TopBar from '../components/topBar/topBar';
import SideBar from '../components/sideBar/sideBar';
import Header from '../components/header/header';
import Worker, {worker} from './components/worker';

const List = (props) => {
  const [workers, setWorkers] = useState();

  useEffect(() => {
    const getWorkers = async () => {
      try {
        const res = await api.get('/workers');
        if (res.status !== 200) throw new Error();
        setWorkers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getWorkers();
  }, []);

  return (
    <>
      <TopBar />
      <div className="displayFlex">
        <SideBar />
        <div className="mainArea w100">
          <Header className="w100 padding-60" hasSearch title="Listagem de colaboradores" />
          <Worker workers={workers}></Worker>
        </div>
      </div>
    </>
  );
};

export default List;
