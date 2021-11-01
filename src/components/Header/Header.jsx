import React from 'react'
import classes from "./Header.module.css"
import Logo from "./Logo/Logo"
import Search from "./Search/Search"

function Header({setSearchCountry, searchCountry}) {
    return (
        <div className={classes.header}>
            <Logo/>
            <Search setSearchCountry={setSearchCountry} searchCountry={searchCountry}/>
        </div>
    )
}

export default Header
