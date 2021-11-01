
import classes from "./Search.module.css"


function Search({setSearchCountry}) {

    const searchDelay = (e) => {
        setTimeout(()=>  setSearchCountry(e.target.value), 1000);
    }
    return (
        <div className={classes.search_wrapper}>
            <input onChange={searchDelay}  type="text" placeholder="Search..."/>
        </div>
    )
}

export default Search
