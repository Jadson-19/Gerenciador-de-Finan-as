import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Login/Login";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, remove} from "firebase/database";

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

const Dados = () => {

  const [users, setUsers] = useState([]);

  const postListRef = ref(db, "/financas/" + auth.currentUser.uid + "/despesas");

      onValue(postListRef, (snapshot) => {
        snapshot.forEach((childSnapshot, index) => {

          const childData = childSnapshot.val();

          const DADOS = {

            data: childData.data,
            selectValue: childData.selectValue,
            valor: childData.valor,
            id: childSnapshot.ref.key,
          }

         
          setUsers(oldDados => [...oldDados, DADOS])
        });
      }, {
        onlyOnce: true
      });
    
      async function deleteUser(IDdespesa) {

        const userDoc = ref(db, "/financas/" + auth.currentUser.uid + "/despesas/" + IDdespesa)
        await remove(userDoc).then(() => {
    
          const removeDados = users.filter(dados => dados.id !== IDdespesa)
          setUsers(removeDados)
        })
      }
      
    return (
    <>
   
    {users.map((user, index) => {
      return (
        <div key={index.id} className="camporeturnDados">
          <h1>Despesa:</h1>
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
    })}
</>
)
}

 <Link to="/Usuario">

<button>
  Retornar à área de cadastro: <i className="fa fa-arrow-left"></i>
</button>

</Link> 


export default Dados;