import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Edicao.module.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../componentes/header/Header';

import EditIcon from '../../assets/edit-icon.svg';
import LockIcon from '../../assets/lock-icon.png';

function Edicao() {
    const navigate = useNavigate()

    const linksMenu = [
        {
            titulo: 'Voltar',
            linkPage: '/home'
        }
    ]

    const [form, setForm] = useState({
        nome: 'Ana Clara Silva',
        cpf: '123.456.784-91',
        nascimento: '19/07/2002',
        email: 'anaclarasilva@gmail.com',
        endereco: 'Rua da moeda 123, Recife.',
        senha: 'anaclara',
        cidade: 'Recife',
        confirmarSenha: 'anaclara',
    });

    const mapeadorCampos = {
        nome: 'Nome:',
        nascimento: 'Data de nascimento:',
        cpf: 'CPF:',
        email: 'E-mail:',
        endereco: 'Endereço:',
        senha: 'Senha:',
        cidade: 'Cidade:',
        confirmarSenha: 'Confirmar senha:'
    }
    const [erros, setErros] = useState({});

    const regexValidacoes = {
        email: /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
    };

    const handleChange = (campo) => (e) => {
        let valor = e.target.value;

        if (campo === 'cpf') {
            valor = valor.replace(/\D/g, '');

            if (valor.length <= 11) {
                valor = valor
                    .replace(/^(\d{3})(\d)/, '$1.$2')
                    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
                    .replace(/\.(\d{3})(\d)/, '.$1-$2');
            }
        }

        setForm((prev) => {
            if (campo === 'senha') {
                prev.confirmarSenha = '';
            }

            return { ...prev, [campo]: valor }
        });

        validarCampo(campo, valor);
    };

    const validarCampo = (campo, valor) => {
        let erro = '';

        if (campo === 'confirmarSenha') {
            if (valor !== form.senha) {
                erro = `As senhas não coincidem.`;
            }
        } else if (regexValidacoes[campo] && !regexValidacoes[campo].test(valor)) {
            erro = `Campo inválido.`;
        }

        if (campo === 'nome' || campo === 'cpf' || campo === 'email' || campo === 'senha' || campo === 'confirmarSenha') {
            if (!valor) {
                erro = `Campo obrigatório.`;
            }
        }

        setErros((prev) => ({ ...prev, [campo]: erro }));
    };

    const camposObrigatorios = [
        'nome',
        'cpf',
        'email',
        'senha',
        'confirmarSenha',
    ];

    const renderCampo = (label, campo, index) => (
        <div className={styles.formItens} key={index}>
            <div className={styles.form}>
                <label>{label} {camposObrigatorios.includes(campo) && <span className={styles.asterisco}>*</span>}</label>
                <input
                    type='text'
                    value={form[campo]}
                    onChange={handleChange(campo)}
                    onBlur={() => validarCampo(campo, form[campo])}
                    disabled={campo === 'cpf' || campo === 'nascimento'}
                />
                <img src={campo === 'cpf' || campo === 'nascimento' ? LockIcon : EditIcon} alt='' className={styles.iconeInput} />
            </div>
            {erros[campo] && <span className={styles.erro}>{erros[campo]}</span>}
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErro = false;
        Object.entries(form).forEach(([campo, valor]) => {
            validarCampo(campo, valor);

            if (camposObrigatorios.includes(campo) && !valor) {
                hasErro = true;
            }

            if (campo !== 'confirmarSenha' && regexValidacoes[campo] && !regexValidacoes[campo].test(valor)) {
                hasErro = true;
            }

            if (campo === 'confirmarSenha' && valor !== form.senha) {
                hasErro = true;
            }
        });

        if (!hasErro) {
            toast.success('Dados atualizados com sucesso!', {
                position: "top-right"
            });

            setTimeout(() => {
                navigate('/home');
            }, 1500)
        }

        if (hasErro) {
            toast.warning('Preencha os obrigatórios e de forma válida para salvar edições.', {
                position: "top-right",
            });
        }
    };

    return (
        <div>
            <Header linksMenu={linksMenu} />
            <main>
                <div className={`${styles.formUser} padding-top-header`}>
                    <div className={styles.formUserContent}>
                        <strong>Meus dados</strong>
                        <form onSubmit={handleSubmit} className={styles.box}>
                            <div className={styles.formContainer}>
                                {
                                    Object.keys(mapeadorCampos).map((campo, index) => {
                                        return renderCampo(mapeadorCampos[campo], campo, index)
                                    })
                                }
                            </div>

                            <div className={styles.footerButtons}>
                                <button type='submit'>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export default Edicao;
