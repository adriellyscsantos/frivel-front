import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Cadastro from "../pages/cadastro";
import Login from "../pages/login";
import Gastos from "../pages/gastos";
import Receitas from "../pages/receitas";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/gastos" component={Gastos} />
        <Route path="/receitas" component={Receitas} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
