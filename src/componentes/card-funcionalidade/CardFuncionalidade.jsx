import styles from './CardFuncionalidade.module.scss'

const CardFuncionalidade = ({ icon, titulo, descricao }) => {
    return (
        <div className={styles.Card}>
            <span className={`${styles.icon} material-icons`}>{icon}</span>

            <span className={styles.titulo}>{titulo}</span>

            <span className={styles.descricao}>{descricao}</span>
        </div>
    )
}

export default CardFuncionalidade;