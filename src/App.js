
import React, { useState } from "react";
import classes from "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {

  const [searchCountry, setSearchCountry] = useState("");
  const [errors, setErrors] = useState([]);
 
  console.log(errors)
  return (
    <div className="App">
  {errors.length>0 && <div className="error_wrapper">  <span className="error_message">{errors[0].toString()} </span>  </div>}
   {errors.length===0 && <> <Header
      searchCountry={searchCountry}
      setSearchCountry={setSearchCountry} />
    <Main searchCountry={searchCountry} setErrors={setErrors} />
    </>
   } 
    
  </div>
 
  );
}

export default App;
