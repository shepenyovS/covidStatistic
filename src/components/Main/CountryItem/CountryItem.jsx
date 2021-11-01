
import React, { useState, useEffect } from "react";
import classes from "./CountryItem.module.css";
import Modal from "./Modal/Modal";

function CountryItem({ country, number }) {
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
document.body.classList.toggle('modal_open', visible);
  },[visible])

  return (
    <>
      {visible && <Modal country={country} closeModal={setVisible} />}

      <div onClick={() => setVisible(true)} className={classes.main_item}>
        <div className={classes.numberWrap}>
          <span>{number}</span>
        </div>
        <div className={classes.countryWrap}>
          <span>{country.Country}</span>
        </div>
        <div className={classes.confirmedWrap}>
          <span>{country.TotalConfirmed}</span>
        </div>
      </div>
    </>
  );
}

export default CountryItem;
