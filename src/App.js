import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();
  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();
    const bmiResult = (weight / (((height / 100) * height) / 100)).toFixed(1);
    setResult(bmiResult);
    if (bmiResult >= 25) {
      setMessage(`Your BMI is ${bmiResult} (Overweight)`);
      setClassName("red");
    } else if (bmiResult <= 18.5) {
      setMessage(`Your BMI is ${bmiResult} (Underweight)`);
      setClassName("red");
    } else {
      setMessage(`Your BMI is ${bmiResult} (Ideal)`);
      setClassName("green");
    }
    // console.log(height);
    // console.log(weight);
    // console.log(bmiResult);
  };

  return (
    <div className="App">
      <form>
        <div className="form-group">
          <h3>
            <span>BMI</span>Calculator
          </h3>
          <input
            type="number"
            placeholder="Height (CM)"
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight (KG)"
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBmi}>CALCULATE</button>
          <div className="result">
            <p className={className}>{message}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
