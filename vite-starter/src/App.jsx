import { useState } from "react";
import './App.css';
import { kebapCaseToTitleCase } from "./helpers";

function App() {
  const [color, setColor] = useState('medium-violet-red');
  const [disabled, setDisabled] = useState(false);
  const nextColor = color === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  return (
    <div>
      <button disabled={disabled} onClick={() => setColor(nextColor)} className={disabled ? 'gray' : color}>change {kebapCaseToTitleCase(nextColor)}</button>
      <br />
      <input onChange={(e) => setDisabled(e.target.checked)} type="checkbox" id="disable-button" name="disable button" />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
