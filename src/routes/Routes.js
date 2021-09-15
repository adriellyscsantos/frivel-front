import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Cadastro from "../pages/cadastro";
import Login from "../pages/login";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/cadastro" component={Cadastro} /> 
        <Route path="/login" component={Login} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;