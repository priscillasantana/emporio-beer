import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Home from "./pages/Home";
import { store } from './store/index'


function Routes() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Cadastro} />
          <Route path="/home" exact component={Home} />
          <Route path="/carrinho" exact component={Carrinho} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default Routes;