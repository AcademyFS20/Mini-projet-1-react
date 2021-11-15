import React,{useState} from 'react';
import './index.css';
function App() {
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  const changeName=()=>
  {
    let inputName=document.getElementById("name");
    name=inputName.value;
    setName(name);
    console.log(name);
  }
  const changeEmail=()=>
  {
    const inputEmail=document.getElementById("email");
    email=inputEmail.value;
    setEmail(email);
    console.log(email);
  }
  const addItems=()=>
  {
    const div=document.createElement("div");
    div.innerHTML=`
    <input type="text" id="name1" name="name"/>
    <input type="email" id="email1" name="email"/>
    `;
    const body=document.querySelector("body");
    body.appendChild(div);
    const inputEmail=div.children[0];
    const inputName=div.children[1];
    inputEmail.value=email;
    inputName.value=name;
  }
  return (
    <div className="App">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={changeName}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={changeEmail}/>
      </div>
      <button type="button" onClick={addItems}>Add person</button>
    </div>
  );
}

export default App;