import Paraph from './components/paraph/index';
import { NavLink } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <NavLink to='/cadastro'> TELA cadastro </NavLink>
        
        <Paraph/>
      </header>
    </div>
  );
}

export default App;
