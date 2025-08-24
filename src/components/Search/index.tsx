import React, { useState } from "react"
import './style.css'


interface SearchProps {
  onSearch: (query: string) => void;
}

const Search:React.FC<SearchProps>=({onSearch})=>{

    const [value, setValue] = useState('')

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const handleSearch = () => {
        onSearch(value);
    };

    return(
    <div className="search">
    <h1>let's find some art!</h1>
    <div className="search__input">
    <input 
    placeholder="Searh Art, Atrist, Work..." 
    type="text" 
    value={value}
    onChange={(e)=>handleChange(e)}/>
    <button onClick={handleSearch}><img src="./search.svg" alt="search" /></button>
    </div>
    </div>
    )
}

export default Search