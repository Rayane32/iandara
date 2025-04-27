import styles from './Cadastro.module.css';
import { CaixaTextoCadastro } from '../../componentes/CaixaTextoCadastro/CaixaTextoCadastro';

function Cadastro(){
    return(
        <main>
            <div className={styles.boxInicial}>
                <div className={styles.boxSecundario}>
                    <strong>Dados cadastrais</strong>
                    <div className={styles.box}>
                        <div className={styles.boxCaixa}>
                            <div className={styles.boxDentro}>
                                <CaixaTextoCadastro apelidoCaixa="NOME"/>
                                <CaixaTextoCadastro apelidoCaixa="CPF"/>
                                <CaixaTextoCadastro apelidoCaixa="ENDEREÇO" hasAsterisco={false}/>
                                <CaixaTextoCadastro apelidoCaixa="CIDADE" hasAsterisco={false}/>
                            </div>
                            <div className={styles.boxDentro}>
                                <CaixaTextoCadastro apelidoCaixa="DATA DE NASCIMENTO" hasAsterisco={false}/>
                                <CaixaTextoCadastro apelidoCaixa="EMAIL"/>
                                <CaixaTextoCadastro apelidoCaixa="SENHA"/>
                                <CaixaTextoCadastro apelidoCaixa="CONFIRMAR SENHA"/>
                            </div>
                        </div> 
                        <button type="submit">Cadastrar</button>
                    </div>
                    
                </div>
            </div>
            
        </main>
        

    )

}

export default Cadastro;