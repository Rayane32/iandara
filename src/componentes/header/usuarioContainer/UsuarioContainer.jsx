import { useState } from "react";
import styles from './UsuarioContainer.module.scss'
import fakeUser from '../../../assets/fake-user.png'

import { useNavigate } from 'react-router';

const UsuarioContainer = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const goTo = (linkPage) => {
        if (linkPage) navigate(linkPage);
    }

    return (
        <div className={styles.usuarioContainer}>
            <span className={styles.nomeUsuario}>CLARA MARIA</span>
            <div
                className={styles.avatarWrapper}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <img src={fakeUser} alt="Usuário" className={styles.avatar} />
                {dropdownOpen && (
                    <div className={styles.dropdown}>
                        <ul>
                            <li onClick={() => goTo('/edicao/usuario')}>Meu Perfil</li>
                            <li onClick={() => goTo()}>Configurações</li>
                            <li onClick={() => goTo('/login')}>Sair</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UsuarioContainer;
