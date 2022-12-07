import { Link } from "react-router-dom";
import { useState} from "react"; 
import { getFirestore, getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCCS9d-VW0rg7tF97l9F0dgp11xwF9taWQ",
    authDomain: "my-data-base-19.firebaseapp.com",
    projectId: "my-data-base-19",
    storageBucket: "my-data-base-19.appspot.com",
    messagingSenderId: "128822585708",
    appId: "1:128822585708:web:5cfd12a49a4c77896eab49",
    measurementId: "G-1KDCCE90ZY",
  });

const Consulta = () => {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
 
    const db = getFirestore(firebaseApp);
    const userCollection = collection(db, "Controle de Finanças");
    const auth = getAuth(firebaseApp)


      async function limparDados(id){
        const userDoc = doc(db, "Controle de Finanças", id);
        await deleteDoc(userDoc)
      }

      async function loginUsuario() {

        await signInWithEmailAndPassword(auth, email, senha).then((value) => {


          const getUsers = async () => {
                  const dados = await getDocs(userCollection);
                 setUsers(dados.docs.map((doc) => ({...doc.data(), id: doc.id })));
                };
            
                getUsers();

          console.log("Usuário logado com sucesso!")
        })
        .catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
    
          console.log(errorCode, errorMessage)
        
        })
      };

  return (
    <>
        <div className="campobuttonConsulta">

      <input type="button" onClick={loginUsuario} value="CONSULTAR FINANÇAS"></input>

        <div>

          <form>
          <input
            className="inputEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Digite seu e-mail"
            required
          ></input>

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

          </form>
   

        {users.map((user) => {
          return (
            <div key={user.id} className="campoConsulta">
                 <h1>Despesa:</h1>
              <h3>Data da despesa: {user.data}</h3> <br></br>
              <h3>Valor da despesa: {user.valor}</h3> <br></br>
              <h3>Tipo de despesa: {user.selectValue}</h3> <br></br>
              <form>
                <input type="button" onClick={ () => limparDados(user.id)} value="Apagar Despesa"></input>
              </form>
            </div>
          );
        })}
      </div>

      </div>

        <div className="rotasConsulta">

      <Link to="/Cadastro">
        <button>
          Retornar à área de cadastro: <i className="fa fa-arrow-left"></i>
        </button>
      </Link>{" "}
      <br></br> <br></br>
      <Link to="/">
        <button>
          Retornar à página inicial: <i className="fa fa-arrow-left"></i>
        </button>
      </Link>


      </div>

    </>
  );
};

export default Consulta;
