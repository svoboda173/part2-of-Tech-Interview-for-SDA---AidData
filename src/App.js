import logo from "./aiddata.png";
import { useState } from "react";
import "./App.css";

function UserInfo({ userName, userAge, userFavoriteSeason, userDrives }) {
  return (
    <div>
      <br />
      The User Entered:
      <p>
        Name: {userName} <br />
        Age: {userAge} <br />
        Favorite Season: {userFavoriteSeason} <br />
        {userDrives ? "The user drives" : "The user does not drive"} <br />
      </p>
    </div>
  );
}

export default function App() {
  // create state variables for the info we need to save to display eventually
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [favSeason, setFavSeason] = useState("Spring");
  const [drives, setDrives] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <img src={logo} className="App-logo" alt="logo" />

          <h4> Please enter the following information about yourself:</h4>

          <label>
            Name:
            <input
              type="text"
              id="name"
              value={name}
              required
              maxLength={150}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />

          <label>
            Age:
            <input
              type="number"
              id="age"
              value={age}
              required
              max={125}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />

          <label>
            Favorite season:
            <select
              required
              value={favSeason}
              onChange={(e) => setFavSeason(e.target.value)}
            >
              <option>Spring </option>
              <option>Summer </option>
              <option>Fall </option>
              <option>Winter </option>
            </select>
          </label>
          <br />

          <fieldset>
            <legend>Can you drive a car?</legend>
            <label>
              Yes
              <input
                required
                type="radio"
                name="drives?"
                value="yes"
                checked={drives}
                onChange={(e) => setDrives(!drives)}
              />
            </label>

            <label className="noSelect">
              No
              <input
                required
                type="radio"
                name="drives?"
                value="no"
                checked={!drives}
                onChange={(e) => setDrives(!drives)}
              />
            </label>
          </fieldset>
          <br />

          <input type="submit" value="Submit" onClick={handleSubmit} />

          <div>
            {hasSubmitted && <UserInfo userName={name} userAge={age} userFavoriteSeason={favSeason} userDrives={drives}/>}
          </div>
        </form>
      </header>
    </div>
  );
}
