import React, { useEffect, useState } from "react";
import {Navbar} from './';
import {Dogs} from './';
import SingleDog from './SingleDog';
import SearchBar from './SearchBar';

const Main = () => {
  const [dogData, setDogData] = useState([]);
  const [dog, setDog] = useState({})
  useEffect(() => {
    async function getDogData(){
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players')
      const result = await response.json()
      const dogs = result.data.players
      setDogData(dogs)
    }
    getDogData()
  },[])
  async function getDog(playerId){
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players/${playerId}`
      );
      const result = await response.json();
      setDog(result.data.player)
    } catch (err) {
      console.error(err);
    }
    
  }
  return (
    <div id="main">
      <div id="navbar">
        <h2>The Puppy Bowl </h2>
        <Navbar />
        <SearchBar />
      </div>{ dog.id ? <SingleDog getDog = {getDog}/>:
        <div id="dogdata">
          <Dogs dogData = {dogData} getDog = {getDog}/>
        </div>
      }
    </div>
  );
};

export default Main;
