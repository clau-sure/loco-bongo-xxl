import { useState } from "react";
import "./App.scss";
import "./assets/Noah Text Heavy.ttf"
import logo from './assets/logo.svg'


function App() {

  const [prevNumber, setPrevNumber] = useState(null);

  const number = (num) => {
    return (
      <div key={num} id={num} className="number">
        <p id={'p_' + num}>{num}</p>
      </div>
    );
  };

  const numbers = () => {
    let rows = [];
    for (let i = 1; i <= 90; i++) {
      rows.push(number(i));
    }
    return rows;
  };

  const enterAdd = (event) => {
    if (event.key === 'Enter') {
      enterNumber();
    }
  }

  const enterNumber = () => {
    let inputValue = document.getElementById("add").value;
    if (inputValue > 0 && inputValue <= 90) {
      if (prevNumber) {
        document.getElementById(prevNumber).classList.remove('heartbeat');
      }
      document.getElementById('p_' + inputValue).classList.add('heartbeat');
      setPrevNumber('p_' + inputValue);
      let classList = document.getElementById(inputValue).classList;
      if (classList.contains('flip')) {
        document.getElementById(inputValue).classList.remove('flip');
        document.getElementById('p_' + inputValue).classList.remove('heartbeat');
      } else {
        document.getElementById(inputValue).classList.add('flip');
      }
    }
    document.getElementById("add").value = null;
  };

  return (
    <div className="both">
      <div className="wrapper">{numbers()}</div>
      <div className="inputs">
        <img src={logo} alt="LocoBongo logo" />
        <div className="inputdiv">
          <input
            type="number"
            id="add"
            min="1"
            max="90"
            defaultValue="null"
            onKeyDown={enterAdd}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
