
import './App.css';
import Header from  './Header.js'
import Dropdown from './Dropdown.js'
import Golds from "./Golds.js"
import {useState} from "react";
function App() {
  const [selected,setSelected]=useState("Choose any one below to know 1gram gold price")
  return (
    <div className="App">
      <Header />
      <Golds/>
      <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
