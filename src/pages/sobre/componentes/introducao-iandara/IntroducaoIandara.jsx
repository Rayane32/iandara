
import styles from './IntroducaoIandara.module.scss'
import iandaraLogo from '../../../../assets/iandaraLogo.svg';
import iandaraLogoTipoLaranja from '../../../../assets/iandaraLogoLaranja.png';

import { useNavigate } from 'react-router';

const IntroducaoIandara = () => {
    const navigate = useNavigate();

    const goTo = (linkPage) => {
        navigate(linkPage)
    }

    return (
        <div className={styles.IntroducaoIandara}>
            <div className={styles.mainSection}>
                <img src={iandaraLogoTipoLaranja} alt="" className={styles.logoTipo} />

                <span className={styles.titulo}>INOVAÇÃO FEITA PARA PROTEGER QUEM MOVE O MUNDO</span>
                <span className={styles.descricao}>Iandara é uma plataforma digital que combina inteligência artificial, geolocalização e redes de apoio para fornecer soluções eficazes de segurança feminina. Seu nome, inspirado na força e na resistência das mulheres, simboliza proteção e solidariedade.</span>

                <div className={styles.buttonsSection}>
                    <button onClick={() => goTo('/home')} >Conheça nosso sistema</button>
                    <button onClick={() => goTo('/login')}>Entrar</button>
                    <button onClick={() => goTo('/cadastro')}>Cadastrar</button>
                </div>
            </div>

            <div className={styles.logoSection}>
                <img src={iandaraLogo} alt='' className={styles.logo} />
            </div>
        </div >
    )
}

export default IntroducaoIandara;