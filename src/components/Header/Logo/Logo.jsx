import React from 'react'
import classes from "./Logo.module.css"
import logo from "./../../../additional/img/logo.png"
function Logo() {
    return (
        <div className={classes.logo_wrapper}>
            <img src={logo} alt="logo_img"/>
            <span>Statistic</span>
        </div>
    )
}

export default Logo;
