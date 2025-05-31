import Header from '../../componentes/header/Header';
import IntroducaoIandara from './componentes/introducao-iandara/IntroducaoIandara';
import Funcionalidades from './componentes/funcionaliades/Funcionalidades';
import InfoIandara from './componentes/info-iandara/InfoIandara';
import InfoDandara from './componentes/info-dandara/InfoDandara';
import QuemSomos from './componentes/quem-somos/QuemSomos';
import Footer from './componentes/footer/Footer';

import styles from './Sobre.module.scss'

const Sobre = () => {
    const linksMenu = [
        { titulo: 'INÍCIO', linkPage: '', classScroll: '' },
        { titulo: 'IANDARA', linkPage: '', classScroll: '' },
        { titulo: 'QUEM SOMOS', linkPage: '', classScroll: 'QuemSomosSection' },
        { titulo: 'ENTRAR', linkPage: '/login', classScroll: '' },
    ];

    return (
        <div>
            <Header linksMenu={linksMenu} />

            <div className={`${styles.Sobre} padding-top-header`}>

                <IntroducaoIandara />
                <Funcionalidades />
                <InfoIandara />
                <InfoDandara />
                <QuemSomos />
            </div>
            <Footer />
        </div>
    )
}

export default Sobre;