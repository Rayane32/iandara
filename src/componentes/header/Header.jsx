import styles from './Header.module.scss';
import { useNavigate } from 'react-router';

import iandaraLogo from '../../assets/iandaraLogo.svg';
import iandaraLogotipo from '../../assets/iandaraLogotipo.svg';
import iandaraLogotipoVerde from '../../assets/iandaraLogotipoVerde.png'
import UsuarioContainer from './usuarioContainer/UsuarioContainer';

const Header = ({ backGroundColor, linksMenu, mostrarPerfil }) => {
    const colorClass = styles[backGroundColor] || styles.orangeOne;
    const navigate = useNavigate();
    const goTo = (linkPage) => {
        if (linkPage) navigate(linkPage);
    }

    return (
        <header className={`${styles.header} ${colorClass}`}>
            <div className={styles.imagesLogo}>
                <img src={iandaraLogo} alt='' />
                <img src={backGroundColor === 'pinkOne' ? iandaraLogotipoVerde : iandaraLogotipo} alt='' />
            </div>

            <div className={styles.acessoIandara}>
                {
                    linksMenu?.map(obj => {
                        return <span className={styles.tituloLink} onClick={() => goTo(obj.linkPage)}>{obj.titulo}</span>
                    })
                }

                {
                    mostrarPerfil && (
                        <div>
                            <UsuarioContainer />
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Header;