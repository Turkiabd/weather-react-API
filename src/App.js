import { useState } from "react";

import "./App.css";

const App = () => {
  //kitchen
  //states

  const [countryName, setCountryName] = useState(" ");
  const [searchedCountry, setSearchcaountry] = useState(" ");
  const [temperature, setTemp] = useState(0);

  const onChange = (e) => {
    setCountryName(e.target.value);
  };
  const onClick = async (e) => {
    const request = await fetch(
      "https://goweather.herokuapp.com/weather/" + countryName
    );
    const data = await request.json();

    setTemp(data.temperature);
    setSearchcaountry(countryName);
    setCountryName("");
  };

  return (
    <div className="container">
      {/* header */}
      <h4 className="display-4"> What's the weather like</h4>
      {/* input */}
      <div class="input-group mb-3">
        <input
          onChange={onChange}
          value={countryName}
          type="text"
          class="form-control"
          aria-describedby="basic-addon1"
        />
      </div>

      {/* btn */}
      <button
        onClick={onClick}
        className="btn btn-outline-secondary"
        type="button"
      >
        get data
      </button>

      {/* to display the results */}
      <h6 className=" display-6 text-center mt-3 w-70">
        The Weather in <span style={{ color: "red" }}>{searchedCountry}</span>
      </h6>

      <h6 className=" display-6 text-center mt-3 w-70">
        The Temperature <span style={{ color: "red" }}>{temperature}</span>
      </h6>
    </div>
  );
};

export default App;
