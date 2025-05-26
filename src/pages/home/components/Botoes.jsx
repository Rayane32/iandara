import styles from './Botoes.module.scss';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Botoes = () => {
    function click() {
        toast.warning('Funcionalidade em construção! Em breve disponível em sistema.', {
            position: "top-right"
        });
    }

    return (
        <div className={styles.BotoesContainer}>
            <div onClick={click} className={`${styles.icon} material-icons`}>
                <span>location_on</span>
            </div>
            <div onClick={click} className={styles.localizacao}>
                Salvar localização em tempo real
            </div>
            <div onClick={click} className={`${styles.icon} ${styles.sos}`}>
                <span>SOS</span>
            </div>
        </div>
    );
};

export default Botoes;
