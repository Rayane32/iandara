import styles from './Cadastro.module.scss';
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
                                <CaixaTextoCadastro apelidoCaixa="Nome:"/>
                                <CaixaTextoCadastro apelidoCaixa="CPF:"/>
                                <CaixaTextoCadastro apelidoCaixa="Endereço:" hasAsterisco={false}/>
                                <CaixaTextoCadastro apelidoCaixa="Cidade:" hasAsterisco={false}/>
                            </div>
                            <div className={styles.boxDentro}>
                                <CaixaTextoCadastro apelidoCaixa="Data de nascimento:" hasAsterisco={false}/>
                                <CaixaTextoCadastro apelidoCaixa="E-mail:"/>
                                <CaixaTextoCadastro apelidoCaixa="Senha:"/>
                                <CaixaTextoCadastro apelidoCaixa="Confirmar senha:"/>
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