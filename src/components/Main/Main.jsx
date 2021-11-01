import React, { useState, useEffect } from "react";
import CountryHeader from "./CountryHeader/CountryHeader";
import CountryItem from "./CountryItem/CountryItem";
import classes from "./Main.module.css";
import axios from "axios";
import Loader from "./Loader/Loader";

function Main({ searchCountry,setErrors }) {
  const [sorted, setSorted] = useState(true);
  const [countryItems, setCountryItems] = useState([]);

  

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => setCountryItems(response.data.Countries)).catch((error)=> {setErrors([error])})
      
  }, []);

 

  const filtredCountry = countryItems.filter((country) => {
    if (searchCountry=== "") {
      return country;
    } else if (
      country.Country.toLowerCase().includes(searchCountry.toLowerCase())
    ) {
      return country;
    }
  });

  const sorting = (param) => {
    if (sorted == false) {
      const sotred = [...countryItems].sort((a, b) =>
        a[param] > b[param] ? 1 : -1
      );
      setCountryItems(sotred);
      setSorted(true);
    } else {
      const sotred = [...countryItems].sort((a, b) =>
        a[param] < b[param] ? 1 : -1
      );
      setCountryItems(sotred);
      setSorted(false);
    }
  };

  return (
    <div className={classes.main}>
      <CountryHeader sorting={sorting} />

      {countryItems.length===0 ? <Loader/> : <>
      {filtredCountry.length===0 &&  <div className={classes.empty_filterResults}> Country not found... </div>}
      {filtredCountry.length>0 && filtredCountry.map((country, index) => (
      <CountryItem key={country.ID} number={index + 1} country={country} />
      ))}
   </>   }
  
    </div>
  );
}

export default Main;
