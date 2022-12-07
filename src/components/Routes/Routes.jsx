import { Route, Routes as ReactRouter } from "react-router-dom";
import Home from "../Home/Home";
import Cadastro from "../Cadastro/Cadastro";
import Consulta from "../Consulta/Consulta"

function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Consulta" element={<Consulta />} />
    </ReactRouter>
  );
}

export default Routes;
