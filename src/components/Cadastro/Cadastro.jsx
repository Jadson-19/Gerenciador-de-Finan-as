import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, query } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

const Cadastro = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setconfirmarSenha] = useState("");


  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [show, setShow] = useState(false)
  const [showconfirmarSenha, setShowconfirmarSenha] = useState(false)

  const [error, setError] = useState("")

  const navigate = useNavigate()
  
  const validEmail = new RegExp ("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  async function createrUser() {

  if (!validEmail.test(email)) {
      setEmailErr(true);
      setError("Por favor, digite um e-mail válido!");
      return;
    } else {
      setEmailErr(false);
    }
    
    if (!validPassword.test(senha)) {
      setPasswordErr(true);
      setError("Por favor, digite uma senha mais segura!");
      return
    } else {
      setPasswordErr(false);
    }

    if (senha !== confirmarSenha) {
      setError("OPS! A senha inserida é diferente da confirmação de senha. Corrija e tente novamente.")
      return;
    }

    if (creater) {
      setError(creater);
      return;
    }

    alert("Usuário criado com sucesso!")

    var creater = await createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {

        const topUserPostsRef = query(ref(db, "/financas/" + auth.currentUser.uid + "/despesas"))

        setEmail('');
        setSenha('');
        setconfirmarSenha('');
        setError("")

        navigate("/Despesas")

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

  function showPassword(e) {
    e.preventDefault()
    setShow(!show)
  }

  function showPasswordConfirm(e) {
    e.preventDefault()
    setShowconfirmarSenha(!showconfirmarSenha)
  }

  return (
    <>

      <form>
        <div className="campoCadastro">
          <div className="cadastroEmail">
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

          <div className="cadastroSenha">
            <MdLock className="iconSenha" />
            <input
              className="senha"
              name="senha"
              type={show ? "text" : "password"}
              maxLength="15"
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

          <div className="cadastroconfirmarSenha">
            <MdLock className="iconSenha" />
            <input
              className="senha"
              name="senha"
              type={showconfirmarSenha ? "text" : "password"}
              maxLength="15"
              placeholder="Repita sua senha"
              value={confirmarSenha}
              onChange={(e) => setconfirmarSenha(e.target.value)}
              required
            ></input>

            {showconfirmarSenha ? (
              <HiEye
                className="login-eye-confirmarSenha"
                onClick={showPasswordConfirm}

              />
            ) : (
              <HiEyeOff
                className="login-eye-confirmarSenha"
                onClick={showPasswordConfirm}

              />
            )}

          </div>

           
        <div  className="messageErrorCreater">
        <h3>{error}</h3>
        </div>
          <div className="buttonCadastro">
          
            <div>
              <input
                type="button"
                onClick={createrUser}
                value="Cadastre-se"
              ></input>
            </div>

            <div>
              <Link to="/Login">
                <input
                  type="button"
                  value={
                    "Já tenho uma conta"
                  }
                ></input>
              </Link>
            </div>

          </div>



        </div>
      </form>

      <div className="rotasCadastro">
    
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

export default Cadastro;
