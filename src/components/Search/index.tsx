import React from "react"
import './style.css'


const Search:React.FC=()=>{
    return(
    <div className="search">
    <h1>let's find some art!</h1>
    <div className="search__input">
    <input placeholder="Searh Art, Atrist, Work..." type="text"/>
    <button><img src="./search.svg" alt="search" /></button>
    </div>
    </div>
    )
}

export default Search