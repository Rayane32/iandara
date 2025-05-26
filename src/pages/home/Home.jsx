import { useState } from 'react';
import Header from '../../componentes/header/Header';
import Mapa from '../../componentes/mapa/Mapa';
import MenuLateral from '../../componentes/menu-lateral/MenuLateral';
import ModalAuris from './components/ModalAuris';
import Botoes from './components/Botoes';

import styles from './Home.module.scss';
import { ToastContainer, toast } from 'react-toastify';


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const linksMenu = [
    { titulo: 'HOME', linkPage: '' },
    { titulo: 'QUEM SOMOS', linkPage: '' }
  ];

  return (
    <div>
      <Header backGroundColor="greenOne" linksMenu={linksMenu} mostrarPerfil={true} />
      <div className={styles.home}>
        <Mapa />
        <MenuLateral onOpenModalAuris={() => setIsModalOpen(true)} />
        <div className={styles.barraLateral} />
        <Botoes />
      </div>

      <ModalAuris isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <ToastContainer />
    </div>
  );
}

export default Home;
