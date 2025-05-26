import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Cadastro.module.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../componentes/header/Header';

function Cadastro() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        nascimento: '',
        email: '',
        endereco: '',
        senha: '',
        cidade: '',
        confirmarSenha: '',
    });

    const [mostrarSenha, setMostrarSenha] = useState(false);

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
        cpf: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
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

    const renderCampo = (label, campo, type = 'text', index) => (

        <div className={styles.formItens} key={index}>
            <div className={styles.form}>
                <label>{label} {camposObrigatorios.includes(campo) && <span className={styles.asterisco}>*</span>}</label>
                <input
                    type={type}
                    value={form[campo]}
                    onChange={handleChange(campo)}
                    onBlur={() => validarCampo(campo, form[campo])}
                />

                {(campo === 'senha' || campo === 'confirmarSenha') &&
                    <div className={styles.iconeInput}>
                        <span onClick={() => setMostrarSenha(!mostrarSenha)} className="material-icons">
                            {mostrarSenha ? 'visibility_off' : 'visibility'}
                        </span>
                    </div>}
            </div>
            {erros[campo] && <span className={styles.erro}>{erros[campo]}</span>}
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErro = false;
        Object.entries(form).forEach(([campo, valor]) => {
            validarCampo(campo, valor);

            if (campo !== 'confirmarSenha' && regexValidacoes[campo] && !regexValidacoes[campo].test(valor)) {
                hasErro = true;
            }

            if (campo === 'confirmarSenha' && valor !== form.senha) {
                hasErro = true;
            }
        });

        if (!hasErro) {
            toast.success('Formulário enviado com sucesso!', {
                position: "top-right"
            });

            setTimeout(() => {
                navigate('/home');
            }, 1500)
        }

        if (hasErro) {
            toast.error('Preencha os campos obrigatórios e de forma válida.', {
                position: "top-right"
            });
        }
    };

    const handleClick = () => {
        navigate('/login');
    }

    return (
        <div>
            <Header />
            <main>
                <div className={`${styles.formUser} padding-top-header`}>
                    <div className={styles.formUserContent}>
                        <strong>Dados cadastrais</strong>
                        <form onSubmit={handleSubmit} className={styles.box}>
                            <div className={styles.formContainer}>
                                {
                                    Object.keys(mapeadorCampos).map((campo, index) => {
                                        return renderCampo(mapeadorCampos[campo], campo, (campo.includes('senha') || campo.includes('confirmarSenha')) && !mostrarSenha ? 'password' : 'text', index)
                                    })
                                }
                            </div>

                            <div className={styles.footerButtons}>
                                <button className={styles.greenBnt} type="button" onClick={handleClick}>
                                    <span className="material-icons">arrow_back</span>
                                    Tela de Login
                                </button>

                                <button type="submit">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export default Cadastro;
