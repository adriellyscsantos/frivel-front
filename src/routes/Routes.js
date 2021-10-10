import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Cadastro from "../pages/cadastro";
import Login from "../pages/login";
import Gastos from "../pages/gastos";
import Metas from "../pages/metas";
import Receitas from "../pages/receitas";
import Dashboard from "../pages/dashboard";
import Relatorios from "../pages/relatorios";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/gastos" component={Gastos} />
        <Route path="/metas" component={Metas} />
        <Route path="/receitas" component={Receitas} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/relatorios" component={Relatorios} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
