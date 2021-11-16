import React,{useState} from 'react';
import './index.css';
import Boutton from './Components/Boutton';
import Books from  './Containers/Books';
import Form from './Containers/Form';
function App() {
  const [state,setState]=useState(false);
  let name="create";
  if(state===true)
  {
    name="save";
  }
  return (
    <div className="App">
      <h1>Admin Dashboard Books</h1>
      <Books/>
      {
        state===true && <Form/>
        }
      <Boutton type="button" classname="btn btn-success" name={name} onclick={()=>{setState(!state)}}/>
    </div>
  );
}

export default App;