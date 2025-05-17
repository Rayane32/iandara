import Header from '../../componentes/header/Header';
import Mapa from '../../componentes/mapa/Mapa';
import MenuLateral from '../../componentes/menu-lateral/MenuLateral';

import styles from './Home.module.scss';

function Home() {
  
    const linksMenu = [
        {
            titulo: 'HOME',
            linkPage: ''
        },
        {
            titulo: 'QUEM SOMOS',
            linkPage: ''
        }
    ]

  return (
    <div>
      <Header backGroundColor='greenOne' linksMenu={linksMenu} mostrarPerfil={true}/>
      <div className={styles.home}>
        <Mapa/>
        <MenuLateral/>
        <div className={styles.barraLateral}/>
      </div>
     </div>
  );
}

export default Home;
