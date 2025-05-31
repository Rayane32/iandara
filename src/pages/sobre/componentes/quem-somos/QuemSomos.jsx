import styles from './QuemSomos.module.scss'
import rapha from '../../../../assets/raphael.png'
import ale from '../../../../assets/ale.png'
import samuel from '../../../../assets/samuel.png'
import rayane from '../../../../assets/rayane.png'

const QuemSomos = () => {

    const students = [
        {
            img: samuel,
            link: 'https://www.linkedin.com/in/devsamarauj0',
            nome: 'Samuel Araujo',
        },
        {
            img: ale,
            link: 'https://www.linkedin.com/in/alessandra-barbosa-308072323',
            nome: 'Alessandra Barbosa',
        },
        {
            img: rapha,
            link: 'https://www.linkedin.com/in/rapheto',
            nome: 'Raphael Miranda',
        },
        {
            img: rayane,
            link: 'https://www.linkedin.com/in/rayane-c-silva',
            nome: 'Rayane Cavalcanti',
        },
    ]

    return (
        <div className={styles.QuemSomos}>
            <div className={styles.QuemSomosSection}>
                <span className={styles.title}>QUEM SOMOS</span>

                <div className={styles.QuemSomosDescription}>
                    <span>Estudantes do curso de Análise e Desenvolvimento de Sistemas da faculdade CESAR School, somos entusiastas da tecnologia com o intuito de desenvolver soluções inteligentes que auxiliem o cliente na busca por mecanismos fáceis e inovadores. A partir disso, o projeto Iandara nasceu com o propósito de juntar a tecnologia com pautas relevantes, a fim de dar voz a mulheres que estão vulneráveis a qualquer tipo de risco, com a finalidade de auxiliá-las da melhor maneira possível.</span>

                    <div className={styles.students}>

                        {
                            students.map(obj => {
                                return <div className={styles.studentsItens}>
                                    <img src={obj.img} alt="" className={styles.img} onClick={() => window.open(obj.link, '_blank')} />

                                    <a href={obj.link}>{obj.nome}</a>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuemSomos;