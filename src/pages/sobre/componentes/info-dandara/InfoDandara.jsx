import styles from './InfoDandaraSection.module.scss'
import Dandara from '../../../../assets/dandara.png'

const InfoDandara = () => {
    return (
        <div className={styles.InfoIandara}>
            <div className={styles.InfoIandaraSection}>
                <span className={styles.title}>QUEM FOI DANDARA DOS PALMARES?</span>

                <div className={styles.InfoIandaraDescription}>
                    <span>Uma mulher negra, guerreira e uma das lideranças do Quilombo dos Palmares no período colonial do Brasil, no século XVII. Ela teve um papel super importante na luta contra a escravidão e na defesa da liberdade do povo negro. Além de ser companheira de Zumbi dos Palmares, Dandara também participou das batalhas e da organização do quilombo, ajudando tanto na parte estratégica quanto na sobrevivência da comunidade, com agricultura e produção de alimentos. Ela era muito corajosa e preferiu morrer a ser capturada e voltar a ser escravizada. A história dela representa força, resistência e o protagonismo das mulheres negras nessa luta. Até hoje, Dandara é lembrada como um símbolo de liberdade e de resistência.</span>

                    <img src={Dandara} alt="" className={styles.img} />
                </div>
            </div>
        </div>
    )
}

export default InfoDandara;