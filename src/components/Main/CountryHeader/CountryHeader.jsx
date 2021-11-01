import React, { useState } from "react";
import classes from "./CountryHeader.module.css";

function CountryHeader({ sorting }) {
  const [activeSort, setActiveSort] = useState(true);
  const [counterCountry, setCounterCountry] = useState(0);
  const [counterConfirmed, setCounterConfirmed] = useState(0);

  return (
    <div className={classes.main_header}>
      <div className={classes.numberWrap}>
        <span>№</span>
      </div>
      <div
        onClick={() => {
          if (counterConfirmed > 0) {
            setCounterConfirmed(0);
          }
          setCounterCountry(counterCountry + 1);
          sorting("Country");
          setActiveSort(!activeSort);
        }}
        className={classes.countryWrap}
      >
        <span>
          Country
          {counterCountry > 0 && activeSort && (
            <span className={classes.sortIcon}> &#9650; </span>
          )}
          {counterCountry > 0 && activeSort === false && (
            <span className={classes.sortIcon}>&#9660; </span>
          )}
        </span>
      </div>
      <div
        onClick={() => {
          if (counterCountry > 0) {
            setCounterCountry(0);
          }
          setCounterConfirmed(counterConfirmed + 1);
          sorting("TotalConfirmed");
          setActiveSort(!activeSort);
        }}
        className={classes.confirmedWrap}
      >
        <span>
          Total Confirmed
          {counterConfirmed > 0 && activeSort && (
            <span className={classes.sortIcon}> &#9650; </span>
          )}
          {counterConfirmed > 0 && activeSort === false && (
            <span className={classes.sortIcon}>&#9660; </span>
          )}
        </span>
      </div>
    </div>
  );
}

export default CountryHeader;
