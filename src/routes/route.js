import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Login from '../pages/login/Login'
import Home from '../pages/home/Home';
import Cadastro from '../pages/cadastro/Cadastro';
import EdicaoUsuario from '../pages/edicao-usuario/EdicaoUsuario';
import PessoaConfianca from '../pages/pessoa-confianca/PessoaConfianca';
import Sobre from '../pages/sobre/Sobre';

const RouteList = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/edicao/usuario' element={<EdicaoUsuario />} />
                <Route path='/pessoa-confianca' element={<PessoaConfianca />} />
                <Route path='*' element={<Navigate to='/sobre' replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteList;