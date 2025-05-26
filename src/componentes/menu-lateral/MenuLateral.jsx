import styles from './MenuLateral.module.scss'

import CardFuncionalidade from '../CardFuncionalidade/CardFuncionalidade';

import userIcon from '../../assets/user.png';
import aurisIcon from '../../assets/auris.png';
import uploadIcon from '../../assets/upload.png';

const MenuLateral = ({ onOpenModalAuris }) => {

    const listaFuncionalidade = [
        {
            titulo: 'Pessoa de confiança',
            imagem: userIcon,
            linkPage: '/pessoa-confianca',
            action: () => { }
        },
        {
            titulo: 'Auris',
            imagem: aurisIcon,
            linkPage: '',
            action: onOpenModalAuris
        },
        {
            titulo: 'Armazenamento seguro',
            imagem: uploadIcon,
            linkPage: '',
            action: () => { }
        },
    ]

    return (
        <div className={`${styles.MenuLateralContainer} padding-top-header`}>
            {
                listaFuncionalidade.map((obj, index) => (
                    <CardFuncionalidade
                        openModal={obj.openModal}
                        key={index}
                        titulo={obj.titulo}
                        imagem={obj.imagem}
                        linkPage={obj.linkPage}
                        onClick={obj.action}
                    />
                ))
            }
        </div>
    )
};

export default MenuLateral;