import './App.css';
import {useState} from "react"

function App() {
  const [display, setDisplay] = useState("")

  const appendtodisplay = (value) =>{
    const display_value = display
    setDisplay(display_value+value)
  }

  const cleardisplay = () =>{
  setDisplay("")
  }

  const deletechar = () => {
  const display_value = display.slice(0,-1)
  setDisplay(display_value)
  }

  const calculate = () => {
    try {
      const display_value = eval(display)
      console.log(display_value)
      setDisplay(display_value)
    }
    catch (error){
     const display_value = 'Error'
     console.log(display_value)
     setDisplay(display_value)
    }
    
  }

  return (
    
    <>
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" id="display" value={display}/>
      <div className='display'>
      <button className="operator" onClick={cleardisplay}>AC</button>
      <button className="operator" onClick={deletechar}>DEL</button>
      </div>
      <div className='display'>
      <button className="btn" value="7" onClick={()=>appendtodisplay('7')}>7</button>
      <button className="btn" value="8" onClick={()=>appendtodisplay('8')}>8</button>
      <button className="btn" value=" 9" onClick={()=>appendtodisplay('9')}>9</button>
      <button className="operator" value="/" onClick={()=>appendtodisplay('/')}>/</button>
      </div>
      <div className='display'>
      <button className="btn" value="4" onClick={()=>appendtodisplay('4')}>4</button>
      <button className="btn" value="5" onClick={()=>appendtodisplay('5')}>5</button>
      <button className="btn" value="6" onClick={()=>appendtodisplay('6')}>6</button>
      <button className="operator" value="*" onClick={()=>appendtodisplay('*')}>*</button>
      </div>
      <div className='display'> 
      <button className="btn" value="1" onClick={()=>appendtodisplay('1')}>1</button>
      <button className="btn" value="2" onClick={()=>appendtodisplay('2')}>2</button>
      <button className="btn" value="3" onClick={()=>appendtodisplay('3')}>3</button>
      <button className="operator" value="-" onClick={()=>appendtodisplay('-')}>-</button>
      </div>
      <div className='display'>
      <button className="btn" value="0" onClick={()=>appendtodisplay('0')}>0</button>
      <button className="operator" value="." onClick={()=>appendtodisplay('.')}>.</button>
      <button className="operator" value="=" onClick={calculate}>=</button>
      <button className="operator" value="+" onClick={()=>appendtodisplay('+')}>+</button>
      </div>
    
    </div>
    </>
  );
}

export default App;
