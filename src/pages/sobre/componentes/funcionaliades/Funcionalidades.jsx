import styles from './Funcionalidades.module.scss'

import CardFuncionalidade from '../../../../componentes/card-funcionalidade/CardFuncionalidade';
import { icon } from 'leaflet';

const Funcionalidades = () => {
    const cards = [
        {
            icon: 'location_on',
            titulo: 'Enviar localização',
            descricao: 'Nessa função você poderá compartilhar sua localização em tempo real para uma pessoa de confiança.',
        },
        {
            icon: 'cloud_upload',
            titulo: 'Armazenamento seguro',
            descricao: 'Você poderá salvar prints, áudios ou qualquer outro tipo de arquivo relevante, podendo assim excluir do seu aparelho com o objetivo de prestar futuras denuncias.',
        },
        {
            icon: 'map',
            titulo: 'Mapa interativo',
            descricao: 'Dar sua opinião nunca foi tão fácil. O objetivo dessa função é você falar sobre locais seguros ou inseguros para outras mulheres estarem cientes do que se passa naquele local.',
        },
        {
            icon: 'psychology',
            titulo: 'Auris',
            descricao: 'Com a nossa chatbot você poderá compartilhar informações sobre dúvidas que possui e ela lhe auxiliará na melhor decisão possível para o seu bem estar.',
        }
    ]

    return (
        <div>
            <div className={styles.titulo}>
                <span className={styles.titulo}>FUNCIONALIDADES</span>
            </div>

            <div className={styles.FuncionalidadesSection}>
                {cards.map(obj =>
                    <CardFuncionalidade icon={obj.icon} titulo={obj.titulo} descricao={obj.descricao} />
                )}
            </div>
        </div>
    )
}

export default Funcionalidades;