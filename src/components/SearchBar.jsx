import React, { useEffect, useState} from "react";
import Dogs from "./Dogs";

const SearchBar = () =>{
    const [searchData, setSearchData] = useState();
    const updateSearch = (e) => {
        setSearchData(e.target.value)
    }
 
    return (
        <div id='searchBar'>
            <input type="text" placeholder="Search Puppies ..." onChange={updateSearch} />
            
        </div>
    )
}

export default SearchBar;