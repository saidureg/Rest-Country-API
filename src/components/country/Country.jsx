import { useState } from "react";
import "./Country.css";
import CountryDetails from "../countryDetails/CountryDetails";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const imgStyle = {
    width: "400px",
    height: "250px",
  };

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  // console.log(handleVisitedCountries);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "red" : "black" }}> {name?.common} </h3>
      <img style={imgStyle} src={flags.png} alt="" />
      {/* <img style={{ width: "400px", height: "250px" }} src={flags.png} alt="" /> */}
      <p>Official Name: {name?.official} </p>
      <p>Population: {population} </p>
      <p>Area: {area} </p>
      <p>Code: {cca3} </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>{" "}
      <br />
      <button onClick={() => handleVisitedFlags(flags)}> Add Flag</button>
      <br />
      <button onClick={handleVisited}> {visited ? "Visited" : "Going"} </button>
      {/* {visited && "I visited the country"} */}
      {visited ? "I visited the country" : "I want to visit"}
      <CountryDetails
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetails>
    </div>
  );
};

export default Country;
