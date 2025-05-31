import styles from './InfoIandara.module.scss'
import iandaraLogoRosa from '../../../../assets/iandaraLogoRosa.svg'
import iandaraLogoLaranja from '../../../../assets/iandaraLogoLaranja.png'
import iandaraLogoVerde from '../../../../assets/iandaraLogotipoVerde.png'
import iandaraLogoLaranjaClaro from '../../../../assets/iandaraLogoLaranjaClaro.png'


const InfoIandara = () => {
    return (
        <div className={styles.InfoIandara}>
            <div className={styles.InfoNameSection}>
                <span className={styles.title}>A FORÇA POR TRÁS DO NOME</span>

                <div className={styles.InfoNameDescription}>
                    <div className={styles.imagesGroup}>
                        <img src={iandaraLogoRosa} alt="" className={styles.img} />
                        <img src={iandaraLogoVerde} alt="" className={styles.img} />
                        <img src={iandaraLogoLaranja} alt="" className={styles.img} />
                        <img src={iandaraLogoLaranjaClaro} alt="" className={styles.img} />
                    </div>

                    <span>Se deu através da junção dos nomes “Inteligência Artificial, “Iara” (uma de nossas manifestações culturais), o verbo “andar” e “Dandara dos Palmares”. Essas representações fazem menção ao mecanismo usado, parte da cultura brasileitra e o direito que possuímos de ir e vir. O nome é símbolo de resistência e feminilidade, trazendo representatividade e significado para o projeto desenvolvido.</span>
                </div>
            </div>
        </div>
    )
}

export default InfoIandara;