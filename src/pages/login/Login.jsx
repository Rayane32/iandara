import { useState } from 'react';
import styles from './Login.module.scss';

import { useNavigate } from 'react-router';

import logoLogin from '../../assets/logoLogin.svg';

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    senha: '',
  });

  const [erros, setErros] = useState({});

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const regexValidacoes = {
    email: /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
  };

  const handleChange = (campo) => (e) => {
    const valor = e.target.value;

    setForm((prev) => ({
      ...prev,
      [campo]: valor,
    }));

    validarCampo(campo, valor);
  };

  const validarCampo = (campo, valor) => {
    let erro = '';

    if (!valor) {
      erro = 'Campo obrigatório.';
    } else if (regexValidacoes[campo] && !regexValidacoes[campo].test(valor)) {
      erro = 'Formato inválido.';
    }

    setErros((prev) => ({
      ...prev,
      [campo]: erro,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErro = false;

    Object.entries(form).forEach(([campo, valor]) => {
      validarCampo(campo, valor);
      if (!valor || (regexValidacoes[campo] && !regexValidacoes[campo].test(valor))) {
        hasErro = true;
      }

      if (form[campo] && !valor) {
        hasErro = true;
      }
    });

    if (!hasErro) {
      alert('Login efetuado com sucesso!');
      navigate('/home');
    } else {
      alert('Preencha os campos corretamente.');
    }

  };

  const handleClick = () => {
    navigate('/cadastro');
  }

  const [checked, setChecked] = useState(false);

  return (
    <main className={styles.boxPrincipal}>
      <div className={styles.ladoVerde}>
        <img src={logoLogin} alt="" />
      </div>
      <div className={styles.ladoForm}>
        <div>
          <label className={styles.firstLabel}> Login </label>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formItens}>
            <div className={styles.form}>
              <label className={styles.labelLogin}>E-mail</label>
              <input
                type="text"
                value={form.email}
                onChange={handleChange('email')}
                onBlur={() => validarCampo('email', form.email)}
              />
            </div>
            {erros.email && <span className={styles.erro}>{erros.email}</span>}
          </div>

          <div className={styles.formItens}>
            <div className={styles.form}>
              <label className={styles.labelLogin}>Senha</label>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                value={form.senha}
                onChange={handleChange('senha')}
                onBlur={() => validarCampo('senha', form.senha)}
              />

              <div className={styles.iconeInput}>
                <span onClick={() => setMostrarSenha(!mostrarSenha)} className="material-icons">
                  {mostrarSenha ? 'visibility_off' : 'visibility'}
                </span>
              </div>

            </div>
            {erros.senha && <span className={styles.erro}>{erros.senha}</span>}
          </div>
        </form>

        <div>
          <label className={styles.checkboxLogin}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className={styles.checkboxLabel}>Manter-me conectado</span>
          </label>
        </div>

        <button onClick={handleSubmit}>Entrar</button>
        <div className={styles.linksLogin}>
          <button>Esqueceu a senha?</button>
          <button onClick={handleClick}>Cadastrar</button>
        </div>
      </div>

    </main>

  );
}

export default Login;