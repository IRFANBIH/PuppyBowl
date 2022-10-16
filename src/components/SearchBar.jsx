import React, { useEffect, useState } from "react";
import Dogs from "./Dogs";
import { Main } from "./Main";

const SearchBar = () => {
  const [searchData, setSearchData] = useState();
    // console.log(Dogs.filter(getDog=>getDog.name.includes("k")));
    console.log(searchData)
  

  return (
    <div id="searchBar">
      <input
        type="text"
        placeholder="Search Puppies ..."
        onChange={(event) => {
          setSearchData(event.target.value);
        }}
      />
      
      
    </div>
  );
};

export default SearchBar;
