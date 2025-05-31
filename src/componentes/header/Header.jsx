import styles from './Header.module.scss';
import { useNavigate } from 'react-router';

import iandaraLogo from '../../assets/iandaraLogo.svg';
import iandaraLogoRosa from '../../assets/iandaraLogoRosa.svg';
import iandaraLogotipoVerde from '../../assets/iandaraLogotipoVerde.png'
import UsuarioContainer from './usuarioContainer/UsuarioContainer';

const Header = ({ backGroundColor, linksMenu, mostrarPerfil }) => {
    const colorClass = styles[backGroundColor] || styles.orangeOne;
    const navigate = useNavigate();

    const scrollToSection = (classScroll) => {
        const section = document.querySelector(`.${classScroll}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const goTo = (linkPage, classScroll) => {
        if (linkPage) navigate(linkPage);

        console.log('classScroll', classScroll);
        console.log('linksMenu', linksMenu);

        if (classScroll) {
            console.log(classScroll);
            scrollToSection(classScroll);
        }
    }

    return (
        <header className={`${styles.header} ${colorClass}`}>
            <div className={styles.imagesLogo}>
                <img src={iandaraLogo} alt='' />
                <img src={backGroundColor === 'pinkOne' ? iandaraLogotipoVerde : iandaraLogoRosa} alt='' />
            </div>

            <div className={styles.acessoIandara}>
                {
                    linksMenu?.map(obj => {
                        return <span className={styles.tituloLink} onClick={() => goTo(obj.linkPage, obj.classScroll)}>{obj.titulo}</span>
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