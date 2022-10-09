import Button from "./Button"
import { useState } from "react"

const  CounterHome = () => {
    // Hook for counter
    const [count, setCount] = useState(0)

    // Methods
    const plusCounter = () => {
        if (count <= 99) {
            setCount(count + 1)
        }else {
            const btn = document.querySelector('#incr')
            btn.disabled = true
            btn.classList.add('no-after')
            alert('click on reset')
        }
    }    
    const minusCounter = () => {
         if (count > 0) {
           setCount(count - 1);
         } else {
           const btn = document.querySelector("#dcr");
           btn.disabled = true;
           btn.classList.add("no-after");
           alert("click on reset");
         }
    }
    const reset = () => {
        const incr = document.querySelector("#incr")
        const dcr = document.querySelector("#dcr");
        if (incr.classList.contains("no-after")) {
            incr.disabled = false;
            incr.classList.remove('no-after');
        }
        if (dcr.classList.contains("no-after")) {
            dcr.disabled = false;
            dcr.classList.remove("no-after");
        }
        setCount(0)
    }
    return (
      <>
        <header style={headerDisplay}>React Counter App</header>
        <div>
          <input type="text" style={counterDisplay} value={count} disabled />
          <Button
            className="cstBtn"
            btnTitle="Increase Counter"
            btnStyle={incrementCounter}
            btnMethod={plusCounter}
            id='incr'
          />
          <Button
            className="cstBtn"
            btnTitle="Decrease Counter"
            btnStyle={decrementCounter}
            btnMethod={minusCounter}
            id="dcr"
          />
          <Button
            btnTitle="Reset Counter"
            btnStyle={resetCounter}
            btnMethod={reset}
          />
        </div>
      </>
    );
}

const headerDisplay = {
  backgroundColor: "#207398",
  fontSize: "2rem",
  padding: "1rem",
  width: "100vw",
  textAlign: "center",
  color: "#fff",
};
const incrementCounter = {
  backgroundColor: "#207398",
  display: "block",
  borderColor: "#207398",
};
const decrementCounter = {
  backgroundColor: "#EDC126",
  display: "block",
  borderColor: "#EDC126",
};
const resetCounter = {
  backgroundColor: "#D82E2F",
  display: "block",
  borderColor: "#D82E2F",
};
const counterDisplay = {
  display: "block",
  padding: '1rem',
  width: '30vw',
  textAlign: 'center',
  borderRadius: '1.2rem',
  color: "#FFFFFF",
  fontSize: '1.5rem',
  marginTop: '5rem'
};

export default CounterHome
