import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <span>
                Violência contra a mulher é crime. Ligue para os canais de denúncia do 190 e 180.
            </span>

            <span>
                O Iandara foi desenvolvido com o objetivo de auxiliar e combater qualquer tipo de risco oferecido à mulher usando a tecnologia.
            </span>
        </div>
    )
}

export default Footer;