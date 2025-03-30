import logo from '../../assets/logo.svg';
import './login-page.css';
import Paraph from './components/paraph/index';
import { NavLink } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <NavLink to='/home'> TELA DOIS </NavLink>
        
        <Paraph/>
      </header>
    </div>
  );
}

export default App;
