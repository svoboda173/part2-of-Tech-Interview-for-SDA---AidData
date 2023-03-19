import logo from './aiddata.png';

import './App.css';

//TODO: add aiddata logo?

function App() {
  return (
    <div className = "App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h4>  Please enter the following information about yourself:</h4>

        <label>
          Name:
          <input type="text" required maxLength={150}/>
        </label>
        
        <label>
          Age:
          <input type="number" required max={125}/>
        </label>

        <label>
          Favorite season:
          <select required>
            <option>Spring </option>
            <option>Summer </option>
            <option>Fall </option>
            <option>Winter </option>
          </select>
        </label>

        <fieldset>
          <legend>Can you drive a car?</legend>
          <label>
            Yes
            <input required type="radio" name = "drives?" value = "yes"/>
          </label>

          <label className="noSelect">
            No
            <input required type="radio" name = "drives?" value = "no"/>
          </label>
        </fieldset>
        <br/>

        <input type = "submit" value = "Submit"/>

      </header>
    </div>
  );
}

export default App;