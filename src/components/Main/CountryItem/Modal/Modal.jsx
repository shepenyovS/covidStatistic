import React from "react";
import classes from "./Modal.module.css";
import heartIcon from "../../../../additional/img/Vector-2.png";
import deadthIcon from "../../../../additional/img/Vector-3.png";
import recoveryIcon from "../../../../additional/img/Vector-4.png";

function Modal({ closeModal, country }) {
  return (
    <div className={classes.modal_overlay}
      onClick={() => {
        closeModal(false);
      }}>
      <div className={classes.modal_window}   >

        <div className={classes.modal_header}>
          <h2>{country.Country}</h2>
        </div>
        <div className={classes.modal_body}>
            
          <div className={classes.body_item}>
            <div>
              <img src={heartIcon} alt="" />
            </div>
            <div>Total Confirmed</div>
            <div>{country.TotalConfirmed}</div>
          </div>

          <div className={classes.body_item}>
            <div>
              <img src={deadthIcon} alt="" />
            </div>
            <div> Total Deaths</div>
            <div>{country.TotalDeaths}</div>
          </div>

          <div className={classes.body_item}>
            <div>
              <img src={recoveryIcon} alt="" />
            </div>
            <div>Total Recovered</div>
            <div>{country.TotalRecovered}</div>
          </div>

        </div>
        <div />
        <div className={classes.modal_footer}>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
