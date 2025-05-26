import styles from './CardFuncionalidade.module.scss';
import { useNavigate } from 'react-router';

const CardFuncionalidade = ({ titulo, imagem, linkPage, onClick }) => {
    const navigate = useNavigate();

    const click = (linkPage) => {
        if (linkPage) navigate(linkPage);
    }

    function handleClick(linkPage, onClick) {
        click(linkPage)
        if (onClick) onClick();
    }

    return (
        <div className={styles.cardFuncionalidade}>
            <div className={styles.imagem} onClick={() => handleClick(linkPage, onClick)}>
                <img src={imagem} alt="" />
            </div>
            <span className={styles.descricao}>{titulo}</span>
        </div>
    )
};

export default CardFuncionalidade;