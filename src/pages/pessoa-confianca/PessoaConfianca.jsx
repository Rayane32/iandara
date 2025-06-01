import { useState } from "react";
import styles from "./PessoaConfianca.module.scss";

import Header from "../../componentes/header/Header";
import Mapa from "./mapa/Mapa";

import { ToastContainer, toast } from 'react-toastify';

const PessoaConfianca = () => {
    const linksMenu = [
        {
            titulo: 'Voltar',
            linkPage: '/home'
        }
    ];

    const regexValidacoes = {
        telefone: /^\d{10,11}$/,
        email: /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
    };

    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        email: '',
    });

    const [erros, setErros] = useState({
        nome: '',
        telefone: '',
        email: '',
    });

    const [listagemPessoas, setListagemPessoas] = useState([
        {
            nome: "Ana Silva",
            telefone: "(81) 91234-5678",
            email: "ana.silva@email.com"
        },
        {
            nome: "Carlos Souza",
            telefone: "(81) 99876-5432",
            email: "carlos.souza@email.com"
        }
    ]);

    const mapeadorCampos = {
        nome: 'Nome:',
        telefone: 'Telefone:',
        email: 'E-mail:',
    };

    const formatarTelefone = (telefone) => {
        telefone = telefone.replace(/\D/g, '');

        if (telefone.length <= 10) {
            return telefone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            return telefone.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
    };

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        let valor = value;

        if (name === 'telefone') {
            valor = formatarTelefone(valor);
        }

        setForm(prev => ({
            ...prev,
            [name]: valor
        }));

        if (name === 'telefone') {
            const numeroLimpo = valor.replace(/\D/g, '');
            if (numeroLimpo.trim() === '') {
                setErros(prev => ({ ...prev, telefone: '' }));
            } else if (!regexValidacoes.telefone.test(numeroLimpo)) {
                setErros(prev => ({ ...prev, telefone: 'Campo inválido' }));
            } else {
                setErros(prev => ({ ...prev, telefone: '' }));
            }
        }

        if (name === 'email') {
            if (valor.trim() === '') {
                setErros(prev => ({ ...prev, email: '' }));
            } else if (!regexValidacoes.email.test(valor)) {
                setErros(prev => ({ ...prev, email: 'Campo inválido' }));
            } else {
                setErros(prev => ({ ...prev, email: '' }));
            }
        }

        if (name === 'nome') {
            if (valor.trim().length < 3) {
                setErros(prev => ({ ...prev, nome: 'O nome deve ter pelo menos 3 caracteres.' }));
            } else {
                setErros(prev => ({ ...prev, nome: '' }));
            }
        }
    };

    const adicionarPessoa = () => {
        let possuiErro = false;
        let novosErros = { nome: '', telefone: '', email: '' };

        if (form.nome.trim() === '') {
            novosErros.nome = 'Preencha o nome.';
            possuiErro = true;
        }
        if (form.telefone.trim() === '') {
            novosErros.telefone = 'Preencha o telefone.';
            possuiErro = true;
        } else {
            const numeroLimpo = form.telefone.replace(/\D/g, '');
            if (!regexValidacoes.telefone.test(numeroLimpo)) {
                novosErros.telefone = 'Telefone inválido.';
                possuiErro = true;
            }
        }
        if (form.email.trim() === '') {
            novosErros.email = 'Preencha o e-mail.';
            possuiErro = true;
        } else if (!regexValidacoes.email.test(form.email)) {
            novosErros.email = 'E-mail inválido.';
            possuiErro = true;
        }

        setErros(novosErros);

        if (possuiErro) return;

        setListagemPessoas(prev => [...prev, { ...form }]);
        setForm({
            nome: '',
            telefone: '',
            email: '',
        });
    };

    const handleChangePessoa = (index, campo, valor) => {
        const novaLista = [...listagemPessoas];

        if (campo === 'telefone') {
            valor = formatarTelefone(valor);
        }

        novaLista[index][campo] = valor;
        setListagemPessoas(novaLista);
    };

    const excluirPessoa = (index) => {
        const novaLista = listagemPessoas.filter((_, i) => i !== index);
        setListagemPessoas(novaLista);
    };

    const localizacao = () => {
        toast.warning('Funcionalidade em construção! Em breve disponível em sistema.', {
            position: "top-right"
        });
    }

    return (
        <div className={styles.pessoaConfianca}>
            <Header backGroundColor='pinkOne' linksMenu={linksMenu} />

            <div className={`padding-top-header`}>
                <div className={`${styles.pessoaConfianca__container}`}>
                    <div className={styles.formulario__container}>
                        <span className={styles.titulo}>Pessoa de confiança</span>

                        <div className={styles.formulario__content}>
                            <div className={styles.campos}>
                                {Object.keys(form).map(campo => (
                                    <div className={styles.item} key={campo}>
                                        <label>{mapeadorCampos[campo]}</label>
                                        <input
                                            type='text'
                                            name={campo}
                                            value={form[campo]}
                                            onChange={handleChangeForm}
                                            {...(campo === 'telefone' ? { maxLength: 15 } : {})}
                                        />
                                        {erros[campo] && (
                                            <span className={styles.erro}>{erros[campo]}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.listagemPessoas__container}>
                                <span
                                    className={styles.adicionarPessoa}
                                    onClick={adicionarPessoa}
                                >
                                    + Adicionar
                                </span>

                                <div className={styles.listagem}>
                                    {listagemPessoas.map((pessoa, index) => (
                                        <div className={styles.linha} key={index}>
                                            <div className={styles.campoListagem}>
                                                <span>Nome:</span>
                                                <input
                                                    type="text"
                                                    value={pessoa.nome}
                                                    onChange={(e) =>
                                                        handleChangePessoa(index, 'nome', e.target.value)
                                                    }
                                                />
                                            </div>

                                            <div className={styles.campoListagem}>
                                                <span>Telefone:</span>
                                                <input
                                                    type="text"
                                                    value={pessoa.telefone}
                                                    onChange={(e) =>
                                                        handleChangePessoa(index, 'telefone', e.target.value)
                                                    }
                                                    maxLength={15}
                                                />
                                            </div>

                                            <div className={styles.campoListagem}>
                                                <span>E-mail:</span>
                                                <input
                                                    type="text"
                                                    value={pessoa.email}
                                                    onChange={(e) =>
                                                        handleChangePessoa(index, 'email', e.target.value)
                                                    }
                                                />
                                            </div>

                                            <div className={styles.operacoes}>
                                                <span>Operações</span>
                                                <div className={styles.botoesOperacoes}>
                                                    <span className={`${styles.editar} material-icons`}>edit</span>

                                                    <span
                                                        className={`${styles.excluir} material-icons`}
                                                        onClick={() => excluirPessoa(index)}
                                                    >
                                                        delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapa__content}>
                        <Mapa />
                        <button className={styles.btn} onClick={localizacao}>
                            Compartilhar localização em tempo real
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PessoaConfianca;
