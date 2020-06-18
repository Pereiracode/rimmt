import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cadastro from './pages/Usuario/Cadastro';
import Carrinho from './pages/Carrinho';
import Login from './pages/Usuario/Login';
import Produto from './pages/Produto';

function Routes(){

return(
    <BrowserRouter>
        <Switch>
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/carrinho" component={Carrinho}/>
        <Route path="/login" component={Login}/>
        <Route path="/produto" component={Produto}/>
        </Switch>
    </BrowserRouter>
)
};

export default Routes;