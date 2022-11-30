import React from "react";
import { Link } from "react-router-dom";
import { IMaskInput } from "react-imask";

function SubHome() {

  return (
    <>
      <div className="dataDespesa">
        <h3> Dia da despesa:</h3>

        <form>
          <input
            className="inputData"
            type="date"
            name="data"
            min="2022-01-01"
            max="2022-12-31"
          ></input>
        </form>
      </div>

      <div className="tipoDespesa">
        <h3> Tipo de despesa:</h3>

        <select name="tipoDespesa">
          <option value="Entretenimento">Entretenimento</option>
          <option value="Investimentos">Investimentos</option>
          <option value="Alimentacao">Aliementação</option>
          <option value="Manutencao">Manutenção do Veículo</option>
          <option value="Lazer">Lazer</option>
          <option value="Academia">Academia</option>
          <option value="Eletrodomestico">Eletrodoméstico</option>
          <option value="Transporte">Transporte</option>
          <option value="Suplementacao">Suplementação</option>
          <option value="Cuidados pessoais">Cuidados Pessoais</option>
          <option value="Pets">Pets</option>
          <option value="Saude">Saúde</option>
          <option value="Educacao">Educação</option>
        </select>
      </div>

      <div className="valorDespesa">

      <h3>Valor da despesa:</h3>
        <form>
          <IMaskInput
           
            name="valor"
            mask="$ 0000.000,00"
            required
          />
        </form>
      </div> 

      <Link to="/">
     
        <button>
        Retornar a página inicial. <i className="fa fa-arrow-left"></i>
        </button>
      </Link>
    </>
  );
}

export default SubHome;
