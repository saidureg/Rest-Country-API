import CountryData from "../countryData/CountryData";

const CountryDetails = (props) => {
  //   const { country, handleVisitedCountries, handleVisitedFlags } = props;
  return (
    <div>
      <h5>Country Details: </h5>
      {/* <CountryData
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}

      {/* another options */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
