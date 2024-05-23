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

  const numbers = (from, to) => {
    let rows = [];
    for (let i = from; i <= to; i++) {
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
    console.log(prevNumber)
    let inputValue = document.getElementById("add").value;
    if (inputValue > 0 && inputValue <= 90) {
      let classList = document.getElementById(inputValue).classList;
      if (classList.contains('selected') || classList.contains('lastSelected')) {
        document.getElementById(inputValue).classList.remove('selected');
        document.getElementById(inputValue).classList.remove('lastSelected');
      } else {
        document.getElementById(inputValue).classList.add('lastSelected');
      }
      if (prevNumber && document.getElementById(prevNumber).classList.contains('lastSelected')) {
        document.getElementById(prevNumber).classList.remove('lastSelected');
        document.getElementById(prevNumber).classList.add('selected');
      }
      setPrevNumber(inputValue);
    }
    document.getElementById("add").value = null;
  };

  return (
    <div className="both">
      <div className="wrapper">
        <div className="first_row">
          {numbers(1, 10)}
        </div>
        <div className="first_row">
          {numbers(11, 20)}
        </div>
        <div className="first_row">
          {numbers(21, 30)}
        </div>
        <div className="first_row">
          {numbers(31, 40)}
        </div>
        <div className="first_row">
          {numbers(41, 50)}
        </div>
        <div className="first_row">
          {numbers(51, 60)}
        </div>
        <div className="first_row">
          {numbers(61, 70)}
        </div>
        <div className="first_row">
          {numbers(71, 80)}
        </div>
        <div className="last_row">
          {numbers(81, 90)}
        </div>
      </div>
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
