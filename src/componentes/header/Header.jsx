import styles from './Header.module.scss';

import iandaraLogo from '../../assets/iandaraLogo.svg';
import iandaraLogotipo from '../../assets/iandaraLogotipo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.imagesLogo}>
                <img src={iandaraLogo} alt='' />
                <img src={iandaraLogotipo} alt='' />
            </div>
        </header>

    )
}