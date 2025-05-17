import styles from './MenuLateral.module.scss'

import CardFuncionalidade from '../CardFuncionalidade/CardFuncionalidade';
import userIcon from '../../assets/user.png';
import aurisIcon from '../../assets/auris.png';
import uploadIcon from '../../assets/upload.png';

const listaFuncionalidade = [
    {
        titulo: 'Pessoa de confiança',
        imagem: userIcon,
        linkPage: '/pessoa-confianca'
    },
    {
        titulo: 'Auris',
        imagem: aurisIcon,
        linkPage: ''
    },
    {
        titulo: 'Armazenamento seguro',
        imagem: uploadIcon,
        linkPage: ''
    },
]


const MenuLateral = () => {
    return (
        <div className={`${styles.MenuLateralContainer} padding-top-header`}>
            {
                listaFuncionalidade.map((obj, index) => (
                    <CardFuncionalidade
                        key={index}
                        titulo={obj.titulo}
                        imagem={obj.imagem}
                        linkPage={obj.linkPage}
                    />
                ))
            }
        </div>
    )
};

export default MenuLateral;