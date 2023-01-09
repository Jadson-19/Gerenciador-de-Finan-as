import { Link } from "react-router-dom";
import { useState } from "react";

import { initializeApp} from "firebase/app";
import { getDatabase, ref, query, onValue  } from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

const Usuario = () => {
  const [type, setType] = useState("login");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState ([]);

  async function loginCadastro() {
    if (type === "login") {
      await signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
        
          const postListRef = ref(db, "/financas/" + auth.currentUser.uid + "/despesas");

          onValue(postListRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
     
              const childData = childSnapshot.val();

              const DADOS = {

                data: childData.data,
                selectValue: childData.selectValue,
                valor: childData.valor   

            }
            setUsers(oldDados => [...oldDados, DADOS])
            
            });
          }, {
            onlyOnce: true
          });
          setEmail('');
          setSenha('');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(
            "OPS! Algo deu errado. Verifique se preencheu tudo corretamente."
          );
          return;
        });
    } else {
      await createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {

        const topUserPostsRef = query(ref(db, "/financas/" + auth.currentUser.uid + "/despesas"))
          
        setEmail('');
        setSenha(''); 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(
            "OPS! Algo deu errado. Verifique se preencheu tudo corretamente."
          );
          return;
        });
    }
  }

  return (
    <>
    <div className="titleUser">
    <h3>Crie uma conta para começar a salvar suas finanças pessoais.</h3>
    </div>
    <form>
      <div className="campoLogin">
        <div className="loginEmail">
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

        <div className="loginSenha">
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

        <div className="buttonLogin">
          
            <div>
              <input
                type="button"
                onClick={loginCadastro}
                value={type === "login" ? "Entrar" : "Criar uma conta"}
              ></input>
            </div>

            <div>
              <input
                type="button"
                onClick={() =>
                  setType((type) => (type === "login" ? "cadastrar" : "login"))
                }
                value={
                  type === "login" ? "Criar uma conta" : "Já possuo uma conta"
                }
              ></input>
            </div>
          
        </div>

        {users.map((user) => {
          return (
            <div key={user.id} className="camporeturnDados">
                 <h1 >Despesa:</h1>
              <h3>Data da despesa: {user.data}</h3> <br></br>
              <h3>Tipo de despesa: {user.selectValue}</h3> <br></br>
              <h3>Valor da despesa: {user.valor}</h3> <br></br>
            </div>
          );
        })}

      </div>
      </form>
      <div className="rotasLogin">
        <Link to="/Despesas">
          <button>
            Registrar finanças pessoais:{" "}
            <i className="fa fa-arrow-right"></i>
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

export default Usuario;
