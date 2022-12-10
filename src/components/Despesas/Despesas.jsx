import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IMaskInput } from "react-imask";


import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, serverTimestamp } from "firebase/database";


const firebaseConfig ={
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
const postListRef = ref(db, 'Controle de Finanças');
const newPostRef = push(postListRef);

const Despesas = () => {

  const [data, setData] = useState("");

  const [selectValue, setselectValue] = useState("");

  const list = [
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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setconfirmarSenha] = useState("");
 
async function salvarDespesas() {

  try {
  await set(newPostRef, {
    
      data: data,
      selectValue: selectValue,
      valor: valor,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
      timestamp: serverTimestamp()
});
} catch (e){
  console.error( "Error adding document: ", e)
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
            max="2022-12-31"
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
      <div className="campoEmail">
        <h3>Crie seu e-mail:</h3>
        
          <input
            className="inputEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Digite seu e-mail"
            required
          ></input>
        
      </div>
      <div className="campoSenha">
        <h3>Crie sua senha:</h3>
        
          <input
            className="senha"
            id="passRegistro"
            name="senha"
            type="password"
            maxLength="10"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          ></input>
        
      </div>
      <div className="campoConfirmarSenha">
        <h3>Repita sua senha:</h3>
        
          <input
            className="confirmarSenha"
            id="passconfirmarRegistro"
            name="confirmarSenha"
            type="password"
            maxLength="10"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setconfirmarSenha(e.target.value)}
            required
          ></input>
        
      </div>
      <div className="campoInputSalvarDespesas">
        
          <input
            type="submit"
            onClick={salvarDespesas}
            value="SALVAR DESPESAS"
          ></input>
       
      </div>
      </form>
      <Link to="/Usuario">
      <button>
          Retornar à área de cadastro: <i className="fa fa-arrow-left"></i>
        </button>
      </Link>{" "}
      <br></br> <br></br>
      <Link to="/">
        <button>
          Retornar à página inicial. <i className="fa fa-arrow-left"></i>
        </button>
      </Link>
    
    </>
  );
  
}

export default Despesas;