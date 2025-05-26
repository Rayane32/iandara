import Header from '../../componentes/header/Header';
import IntroducaoIandara from './componentes/introducao-iandara/IntroducaoIandara';
import Funcionalidades from './componentes/funcionaliades/Funcionalidades';

import styles from './Sobre.module.scss'

const Sobre = () => {
    const linksMenu = [
        { titulo: 'INÍCIO', linkPage: '' },
        { titulo: 'IANDARA', linkPage: '' },
        { titulo: 'QUEM SOMOS', linkPage: '' },
        { titulo: 'ENTRAR', linkPage: '/login' },
    ];


    return (
        <div>
            <Header linksMenu={linksMenu} />

            <div className={`${styles.Sobre} padding-top-header`}>

                <IntroducaoIandara />
                <Funcionalidades />
            </div>
        </div>
    )
}

export default Sobre;