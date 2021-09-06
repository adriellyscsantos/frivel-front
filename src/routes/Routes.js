import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Cadastro from "../pages/cadastro";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/cadastro" component={Cadastro} /> 

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;