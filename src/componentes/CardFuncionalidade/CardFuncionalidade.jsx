import styles from './CardFuncionalidade.module.scss';
import { useNavigate } from 'react-router';

const CardFuncionalidade = ({ titulo, imagem, linkPage }) => {
    const navigate = useNavigate();

    const click = (linkPage) => {
        if (linkPage) navigate(linkPage);
    }

    return (
        <div className={styles.cardFuncionalidade}>
            <div className={styles.imagem} onClick={() => click(linkPage)}>
                <img src={imagem} alt="" />
            </div>
            <span className={styles.descricao}>{titulo}</span>
        </div>
    )
};

export default CardFuncionalidade;