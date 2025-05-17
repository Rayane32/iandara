import { useState } from "react";
import styles from "./PessoaConfianca.module.scss"

import Header from "../../componentes/header/Header";
import Mapa from "./mapa/Mapa";

const PessoaConfianca = () => {
    const linksMenu = [
        {
            titulo: 'Voltar',
            linkPage: '/home'
        }
    ]

    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        email: '',
    });

    const mapeadorCampos = {
        nome: 'Nome:',
        telefone: 'Telefone:',
        email: 'E-mail:',
    }

    const listagemPessoas = [
        {
            nome: '',
            telefone: '',
            email: '',
            isDisabled: true,
        },
        {

        },
        {

        }
    ]

    const adicionarPessoa = () => {

    }

    return (
        <div className={styles.pessoaConfianca}>
            <Header backGroundColor='pinkOne' linksMenu={linksMenu} />

            <div className={`padding-top-header`}>
                <div className={`${styles.pessoaConfianca__container} `}>
                    <div className={styles.formulario__container}>
                        <span className={styles.titulo}>Pessoa de confiança</span>

                        <div className={styles.formulario__content}>
                            <div className={styles.campos}>
                                {
                                    Object.keys(form).map(obj => {
                                        return (
                                            <div className={styles.item}>
                                                <label>{mapeadorCampos[obj]}</label>
                                                <input
                                                    type='text'
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className={styles.listagemPessoas__container}>
                                <span className={styles.adicionarPessoa} onClick={() => adicionarPessoa()}>+ Adicionar</span>

                                <div className={styles.listagem}>

                                    {
                                        listagemPessoas.map((obj, index) => {
                                            return (
                                                <div className={styles.linha} key={index}>
                                                    <div className={styles.campoListagem}>
                                                        <span>Nome:</span>
                                                        <input type="text" />
                                                    </div>

                                                    <div className={styles.campoListagem}>
                                                        <span>Telefone:</span>
                                                        <input type="text" />
                                                    </div>

                                                    <div className={styles.campoListagem}>
                                                        <span>E-mail:</span>
                                                        <input type="text" />
                                                    </div>

                                                    <div className={styles.operacoes}>
                                                        <span>Operações</span>

                                                        <div className={styles.botoesOperacoes}>
                                                            <span className={`${styles.editar} material-icons`}>edit</span>

                                                            <span className={`${styles.excluir} material-icons`}>delete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapa__content}>
                        <Mapa />
                        <button className={styles.btn}>Compartilhar localização em tempo real</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PessoaConfianca;