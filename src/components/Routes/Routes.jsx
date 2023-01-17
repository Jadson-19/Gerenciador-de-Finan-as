import { Route, Routes as ReactRouter } from "react-router-dom";
import Home from "../Home/Home";
import Despesas from "../Despesas/Despesas";
import Dados from "../Dados/Dados";
import Cadastro from "../Cadastro/Cadastro";
import Login from "../Login/Login";


function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/Despesas" element={<Despesas />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dados" element={<Dados />} />
    </ReactRouter>
  );
}

export default Routes;
