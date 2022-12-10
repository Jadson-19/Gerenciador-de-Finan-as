import { Route, Routes as ReactRouter } from "react-router-dom";
import Home from "../Home/Home";
import Despesas from "../Despesas/Despesas";
import Usuario from "../Usuario/Usuario"


function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/Despesas" element={<Despesas />} />
      <Route path="/Usuario" element={<Usuario />} />
    </ReactRouter>
  );
}

export default Routes;
