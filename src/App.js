import logo from './logo.svg';
import './App.css';

//TODO: add aiddata logo?

function App() {
  return (
    <div className = "App">
      <header className="App-header">
        <h4>  Please enter the following information about yourself:</h4>

        <label>
          Name:
          <input type="text" required maxLength={150}>
          </input>
        </label>
        
        <label>
          Age:
          <input type="number" required max={125}>
          </input>
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
            <input required type="radio" name = "drives?" value = "yes">
            </input>
          </label>

          <label className="noSelect">
            No
            <input required type="radio" name = "drives?" value = "no">
            </input>
          </label>
        </fieldset>

        <input type = "submit">
          
        </input>

      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;