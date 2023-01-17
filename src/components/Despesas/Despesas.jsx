import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMaskInput } from "react-imask";


import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, serverTimestamp } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCCS9d-VW0rg7tF97l9F0dgp11xwF9taWQ",
  authDomain: "my-data-base-19.firebaseapp.com",
  projectId: "my-data-base-19",
  storageBucket: "my-data-base-19.appspot.com",
  messagingSenderId: "128822585708",
  appId: "1:128822585708:web:5cfd12a49a4c77896eab49",
  measurementId: "G-1KDCCE90ZY",
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);


const Despesas = () => {

  const [data, setData] = useState("");

  const [selectValue, setselectValue] = useState("");

  const list = [
    { id: "", name: "" },
    { id: "Entretenimento", name: "Entretenimento" },
    { id: "Investimentos", name: "Investimentos" },
    { id: "Alimentação", name: "Alimentação" },
    { id: "Manutenção do Veículo", name: "Manutenção do Veículo" },
    { id: "Lazer", name: "Lazer" },
    { id: "Academia", name: "Academia" },
    { id: "Eletrodoméstico", name: "Eletrodoméstico" },
    { id: "Transporte", name: "Transporte" },
    { id: "Suplementação", name: "Suplementação" },
    { id: "Cuidados Pessoais", name: "Cuidados Pessoais" },
    { id: "Pets", name: "Pets" },
    { id: "Saúde", name: "Saúde" },
    { id: "Educação", name: "Educação" },
  ];

  const [valor, setValor] = useState("");

  const [error, setError] = useState("")

  async function salvarDespesas() {

    if(auth.currentUser) {

      if (!data || !selectValue || !valor) {
        
        alert("OPS! Algo deu errado. Verifique se preencheu tudo corretamente.");
        setError("ATENÇÃO! Algum dos campos do formulário não foi preechido.");
        return; 
      } 
      
      try {

        const postListRef = ref(db, "/financas/" + auth.currentUser.uid + "/despesas");
        const newPostRef = push(postListRef);

        await set(newPostRef, {

          data: data,
          selectValue: selectValue,
          valor: valor,
          uid: auth.currentUser.uid,
          timestamp: serverTimestamp()

        });
      } catch (e) {
        console.error("Error adding document: ", e)
        alert(
          "OPS! Algo deu errado. Verifique se preencheu tudo corretamente."
        );
      }

      setData("")
      setselectValue("")
      setValor("")

      return
    } else {

      alert(
        "OPS! Verificamos que você que não possui uma conta ainda. Crie uma conta antes de tentar salvar despesas."
      );
    }

  }

  return (
    <>

      <form>
        <div className="dataDespesa">
          <h3> Dia da despesa:</h3>


          <input
            className="inputData"
            value={data}
            type="date"
            name="data"
            // min="2023-01-31"
            max="2023-12-31"
            onChange={(e) => setData(e.target.value)}
            required
          ></input>

        </div>
        <div className="tipoDespesa">
          <h3> Tipo de despesa:</h3>

          <select
            value={selectValue}
            onChange={(e) => setselectValue(e.target.value)}
            required
          >
            {list.map(
              (item, index) => [(
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>),
                (<option value={item.id}>{item.name}</option>)
              )]
            )}
          </select>

        </div>
        <div className="valorDespesa">
          <h3>Valor da despesa:</h3>

          <IMaskInput
            name="valor"
            mask="$ 0000.000,00"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />

        </div>

      
        <div  className="messageErrorDespesas">
        <h3>{error}</h3>
        </div>
        
        <div className="campoInputSalvarDespesas">
       
          <input
            type="button"
            onClick={salvarDespesas}
            value="SALVAR DESPESAS"
          ></input>

        </div>
      </form>
      
      <div className="rotasDespesas">
      <Link to="/Dados">
          <button>
            Consultar despesas:{" "}
            <i className="fa fa-arrow-right"></i>
          </button>
        </Link>{" "}
        <br></br> <br></br>
      <Link to="/Cadastro">
        <button>
          Retornar à área de cadastro: <i className="fa fa-arrow-left"></i>
        </button>
      </Link>{" "}
      <br></br> <br></br>
      <Link to="/Login">
        <button>
          Retornar à área de login: <i className="fa fa-arrow-left"></i>
        </button>
      </Link>{" "}
      <br></br> <br></br>
      <Link to="/">
        <button>
          Retornar à página inicial. <i className="fa fa-arrow-left"></i>
        </button>
      </Link>
      </div>
    </>
  );

}

export default Despesas;