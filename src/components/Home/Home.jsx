import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div class="pagInicial">
        <h2>
          {" "}
          Com um controle de finanças moderno e atualizado, o usuário garantirá
          uma previsibilidade financeira poderosa cadastrando suas despesas em
          tempo real, de onde estiver. Será possível através da plataforma,
          lançar os gastos do dia a dia, acompanhe os relatórios sempre que
          possível e assuma o controle do seu dinheiro.{" "}
        </h2>{" "}
        <br></br>
        <h2>Vamos começar?</h2>
       
        <Link to="/SubHome">

        <button>
          Gerenciar Finanças <i className="fa fa-arrow-right"></i>
        </button>

        </Link>
      </div>
    </section>
  );
}

export default Home;
