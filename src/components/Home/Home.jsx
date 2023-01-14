import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section>
      <div className="pagInicial">
        <h2>
          {" "}
          Com um controle de finanças moderno e atualizado, o usuário garantirá
          uma previsibilidade financeira poderosa cadastrando suas despesas em
          tempo real, de onde estiver. Através da plataforma, será possível
          lançar os gastos do dia a dia e acompanhar os relatórios sempre que
          possível. Assuma já o controle da sua vida financeira.{" "}
        </h2>{" "}
        <br></br>
        <h2>Vamos começar?</h2>
        <div className="rotasHome">
        <Link to="/Cadastro">
          <button>
            Cadastrar-se <i className="fa fa-arrow-right"></i>
          </button>
        </Link>
        <br></br><br></br>
        <Link to="/Login">
          <button>
            Fazer login <i className="fa fa-arrow-right"></i>
          </button>
        </Link>
        </div>
      </div>
     
    </section>


  );
  
}

export default Home;
