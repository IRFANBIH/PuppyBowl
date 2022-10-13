import React, { useEffect, useState } from "react";
import {Navbar} from './';
import {Components} from './';

const Main = () => {
  const [dogData, setDogData] = useState([]);
  useEffect(() => {
    async function getDogData(){
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players')
      const result = await response.json()
      const dogs = result.data.players
      setDogData(dogs)
    }
    getDogData()
  },[])
  return (
    <div id="main">
      <div id="navbar">
        <h2>The Puppy Bowl </h2>
        <Navbar />
        {/* <Components const getDogs = {props} /> */}
      </div>
    </div>
  );
};

export default Main;
