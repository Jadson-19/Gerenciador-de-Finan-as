import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IMaskInput } from "react-imask";


import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCCS9d-VW0rg7tF97l9F0dgp11xwF9taWQ",
  authDomain: "my-data-base-19.firebaseapp.com",
  projectId: "my-data-base-19",
  storageBucket: "my-data-base-19.appspot.com",
  messagingSenderId: "128822585708",
  appId: "1:128822585708:web:5cfd12a49a4c77896eab49",
  measurementId: "G-1KDCCE90ZY",
});



const Cadastro = () => {
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
 
  const db = getFirestore(firebaseApp);
  const userCollection = collection(db, "Controle de Finanças");
  const auth = getAuth(firebaseApp)

 async function cadastrarUsuario() {

 

  //   if (senha !== confirmarSenha){

  //    await a.preventDefault();

  //    Function.preventDefault();
      
  //     <h2>Verifique se a confirmação da senha está correta.</h2>
      
  //     console.log("Dados não cadastrados. A senha inserida é diferente da confirmação.");
     
  // } else{
  
  //  <h2>Dados cadastrados com sucesso!</h2>;
   
  //    console.log("Dados cadastrados no banco com sucesso!");
  // }


  try {
    const docRef = await addDoc(userCollection, {
      data,
      selectValue,
      valor,
      email,
      senha,
      confirmarSenha,
      timestamp: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id)
  } catch (e){
    console.error( "Error adding document: ", e)
  }

      createUserWithEmailAndPassword(auth, email, senha).then((value) => {

      let uid = data.user.uid;

       const createUserr = userCollection.doc(uid).set({
  
        data,
        selectValue,
        valor,
        email,
        senha,
        confirmarSenha,
        timestamp: serverTimestamp()
           
       });

      console.log(createUserr)
      console.log("Usuário e senha autenticados com sucesso!" + value.user.uid)
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage)
    
    })
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
              (item, index) => (
                [(<option value={item.id}>{item.name}</option>),
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
                (<option value={item.id}>{item.name}</option>)]
              )
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
            maxlength="10"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          ></input>
        
      </div>
      <div className="campoConfirmarSenha">
        <h3>Repita sua senha:</h3>
        
          <input
            class="confirmarSenha"
            id="passconfirmarRegistro"
            name="confirmarSenha"
            type="password"
            maxlength="10"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setconfirmarSenha(e.target.value)}
            required
          ></input>
        
      </div>
      <div className="campoinputCadastro">
        
          <input
            type="submit"
            onClick={cadastrarUsuario}
            value="SALVAR DADOS"
          ></input>
       
      </div>
      </form>
      <Link to="/Consulta">
        <button>
          Consultar seus dados financeiros:{" "}
          <i className="fa fa-arrow-right"></i>
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

export default Cadastro;
