import { useEffect } from 'react';
import styles from './ModalAuris.module.scss';
import { IoClose } from "react-icons/io5";

import iandaraLogo from '../../../assets/iandaraLogo.svg';
import iandaraLogotipoVerde from '../../../assets/iandaraLogotipoVerde.png';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalAuris({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            toast.warning('Funcionalidade em construção! Em breve disponível em sistema.', {
                position: "top-right"
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} padding-top-header`}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.imagesLogo}>
                        <img src={iandaraLogo} alt="Logo Iandara" className={styles.logo} />
                        <img src={iandaraLogotipoVerde} alt="Logotipo Iandara" className={styles.image} />
                    </div>
                    <button onClick={onClose} className={styles.closeButton}>
                        <IoClose size={24} />
                    </button>
                </div>

                <div className={styles.chatBox}>
                    <div className={styles.messageAurisContainer}>
                        <span>Auris</span>
                        <div className={styles.messageAuris}>Mensagem de Auris</div>
                    </div>

                    <div className={styles.messageUserContainer}>
                        <span>Você</span>
                        <div className={styles.messageUser}>Resposta do usuário</div>
                    </div>

                    <div className={styles.messageAurisContainer}>
                        <span>Auris</span>
                        <div className={styles.messageAuris}>Outra mensagem de Auris</div>
                    </div>

                    <div className={styles.messageUserContainer}>
                        <span>Você</span>
                        <div className={styles.messageUser}>Outra resposta</div>
                    </div>

                    <div className={styles.messageAurisContainer}>
                        <span>Auris</span>
                        <div className={styles.messageAuris}>Mensagem final de Auris</div>
                    </div>

                    <div className={styles.inputArea}>
                        <input type="text" placeholder="Digite sua mensagem..." />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAuris;
