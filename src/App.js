import "./App.scss";
import "./assets/Noah Text Heavy.ttf"
import logo from './assets/logo.svg'


function App() {
  const number = (num) => {
    return (
      <div key={num} id={num} className="number">
        <p>{num}</p>
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

  const enterAnadir = (event) => {
    if (event.key === 'Enter') {
      enterNumber();
    }
  }

  const enterNumber = () => {
    let inputValue = document.getElementById("anadir").value;
    let classList = document.getElementById(inputValue).classList;
    if (classList.contains('flip')) {
      document.getElementById(inputValue).classList.remove('flip');
    } else {
      document.getElementById(inputValue).classList.add('flip');
    }
  };

  return (
    <div className="both">
      <div className="wrapper">{numbers()}</div>
      <div className="inputs">
        <img src={logo} alt="LocoBongo logo" />
        <div className="inputdiv">
          <input
            type="number"
            id="anadir"
            min="1"
            max="90"
            defaultValue="0"
            onKeyDown={enterAnadir}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
