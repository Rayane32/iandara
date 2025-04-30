import { useState } from 'react';
import styles from './Cadastro.module.scss';
import { Footer } from '../../componentes/Footer/Footer';
import { Header } from '../../componentes/header/Header';

import { useNavigate } from 'react-router';

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

    const mapeadorCampos = {
        nome: "Nome:",
        nascimento: "Data de nascimento:",
        cpf: "CPF:",
        email: "E-mail:",
        endereco: "Endereço:",
        senha: "Senha:",
        cidade: "Cidade:",
        confirmarSenha: "Confirmar senha:"
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
        "nome",
        "cpf",
        "email",
        "senha",
        "confirmarSenha",
    ];

    const renderCampo = (label, campo, type = 'text') => (
        <div className={styles.formItens}>
            <div className={styles.form}>
                <label>{label} {camposObrigatorios.includes(campo) && <span className={styles.asterisco}>*</span>}</label>
                <input
                    type={type}
                    value={form[campo]}
                    onChange={handleChange(campo)}
                    onBlur={() => validarCampo(campo, form[campo])}
                />
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
            alert('Formulário enviado com sucesso!');
        }

        if (hasErro) {
            alert('Preencha os obrigatórios e de forma válida.');
        }
    };

    const handleClick = () => {
        navigate('/login-page');
    }

    return (
        <div>
            <Header />
            <main>
                <div className={styles.formUser}>
                    <div className={styles.formUserContent}>
                        <strong>Dados cadastrais</strong>
                        <form onSubmit={handleSubmit} className={styles.box}>
                            <div className={styles.formContainer}>
                                {
                                    Object.keys(mapeadorCampos).map((campo) => {
                                        return renderCampo(mapeadorCampos[campo], campo, campo.includes('senha') ? 'password' : 'text')
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
            <Footer />
        </div>
    );
}

export default Cadastro;
