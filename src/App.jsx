import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes/Routes";


import "./Style.css";

function App() {
  return (
    <>
      <header>
        <h1>Controle de Finanças</h1>
        <p>
          Através dessa aplicação, o usuário poderá controlar suas finanças
          pessoais do mês.
        </p>
      </header>

      <div className="container">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
      <footer>
        <p>
          <span className="span">CONTROLE DE FINANÇAS</span>
        </p>
        <p>
          <span className="span">
            Para maiores informações - clique no link abaixo para visualizar
            minhas redes sociais:
          </span>
        </p>

        <div className="social">
          <a href="https://www.facebook.com/JadsonSouzaSCR">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/jadson.souzza/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/jadson-souza-a6a130224/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="fim">© 2023 Copyright by Jadson Souza.</p>
      </footer>
    </>
  );
}

export default App;
