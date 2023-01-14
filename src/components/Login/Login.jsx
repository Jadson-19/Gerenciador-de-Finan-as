import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, query, onValue, remove} from "firebase/database";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

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

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    // const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false)
    const [error, setError] = useState("")

    
  const navigate = useNavigate()

    async function loginUser() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {

      navigate("/Dados")

      


      // const postListRef = ref(db, "/financas/" + auth.currentUser.uid + "/despesas");

      // onValue(postListRef, (snapshot) => {
      //   snapshot.forEach((childSnapshot) => {

      //     const childData = childSnapshot.val();

      //     const DADOS = {

      //       data: childData.data,
      //       selectValue: childData.selectValue,
      //       valor: childData.valor,
      //       id: childSnapshot.ref.key

      //     }
      //     setUsers(oldDados => [...oldDados, DADOS])

      //   });
      // }, {
      //   onlyOnce: true
      // });
    
  
      setEmail('');
      setSenha('');

     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(
        "OPS! Algo deu errado. O e-mail ou a senha inserida não existem."
      );
      return;
    });

}

// async function deleteUser(IDdespesa) {

//     const userDoc = ref(db, "/financas/" + auth.currentUser.uid + "/despesas/" + IDdespesa)
//     await remove(userDoc).then(() => {

//       const removeDados = users.filter(dados => dados.id !== IDdespesa)
//       setUsers(removeDados)
//     })
//   }

  function showPassword(e) {
    e.preventDefault()
    setShow(!show)
  }

    return(
        <>

<form>
        <div className="campoLogin">
          <div className="loginEmail">
            <MdEmail className="iconEmail" />
            <input
              className="inputEmail"
              type="email"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              name="email"
              placeholder="Digite seu e-mail"
              required
            ></input>
          </div>

          <div className="loginSenha">
            <MdLock className="iconSenha" />
            <input
              className="senha"
              name="senha"
              type={show ? "text" : "password"}
              maxLength="10"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
              required
            ></input>

            {show ? (
              <HiEye
                className="login-eye"
                onClick={showPassword}

              />
            ) : (
              <HiEyeOff
                className="login-eye"
                onClick={showPassword}

              />
            )}

          </div>

          <h3 className="messageError">{error}</h3>
          <div className="buttonLogin">

            <div>
              <input
                type="button"
                onClick={loginUser}
                value="Entrar"
              ></input>
            </div>

            <div>
            <Link to="/Cadastro">
              <input
                type="button"
                value={
                "Sem conta? Cadastre-se" 
                }
              ></input>
              </Link>
            </div>

          </div>

          {/* {users.map((user) => {
            return (
              <div key={user.id} className="camporeturnDados">
                <h1 >Despesa:</h1>
                <h3>Data da despesa: {user.data}</h3> <br></br>
                <h3>Tipo de despesa: {user.selectValue}</h3> <br></br>
                <h3>Valor da despesa: {user.valor}</h3> <br></br>

                <div className="deleteUser">
                 
                    <input
                      type="button"
                      onClick={() => deleteUser(user.id)}
                      value="APAGAR"
                    ></input>
                  
                </div>
              </div>
            );
          })} */}
      

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
        <br></br> <br></br>
        <Link to="/Cadastro">
          <button>
            Retornar à área de cadastro: <i className="fa fa-arrow-left"></i>
          </button>
        </Link>
      </div>
        
        </> 
    )
}


export default Login;