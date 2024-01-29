import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {

  const ageRef = useRef();
  const [age, setAge] = useState(0)
  
  const handleAge = (e) =>{
    e.preventDefault()
    setAge(ageRef.current.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td>Age</td>
          </tr>
          <tr>
            <td>
              <form >
              <input type="number" ref={ageRef} placeholder="..." style={{margin:"10px 0",padding:"5px 10px",textAlign:"center", fontSize:"1.5rem"}}/>
              </form>
            </td>
          </tr>
          <tr>
          <button onClick={(e)=>handleAge(e)}>Submit</button>
          </tr>
        </table>
        <div>
          <br/><br/><br/>
          {age}
        </div>
      </header>
    </div>
  );
}

export default App;
