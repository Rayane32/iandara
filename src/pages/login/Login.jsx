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
    });

    if (!hasErro) {
      alert('Login efetuado com sucesso!');
    } else {
      alert('Preencha os campos corretamente.');
    }
  };

  const handleClick = () => {
    navigate('/cadastro');
  }

  return (
    <main className={styles.boxPrincipal}>
        <div className={styles.ladoVerde}>
            <img src={logoLogin} alt="" />
        </div>
        <div className={styles.ladoForm}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formItens}>
                <label className={styles.labelLogin}>Email</label>
                <input
                type="text"
                value={form.email}
                onChange={handleChange('email')}
                onBlur={() => validarCampo('email', form.email)}
                />
                {erros.email && <span className={styles.erro}>{erros.email}</span>}
            </div>

            <div className={styles.formItens}>
                <label className={styles.labelLogin}>Senha</label>
                <input
                type="password"
                value={form.senha}
                onChange={handleChange('senha')}
                onBlur={() => validarCampo('senha', form.senha)}
                />
                {erros.senha && <span className={styles.erro}>{erros.senha}</span>}
            </div>
            </form>
            <button type="submit">Entrar</button>
            <div className={styles.linksLogin}>
              <button type="submit" >Esqueceu a senha?</button>
              <button type="submit" onClick={handleClick}>Cadastrar</button>
                {/*<a href="#" onClick={handleClick}>Esqueceu a senha?</a>
                <a href="#" onClick={handleClick}>Cadastrar</a>*/}
            </div>
        </div>

    </main>
    
  );
}

export default Login;