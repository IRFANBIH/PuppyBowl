import React from 'react'

const Dogs = (props) => {
  const myDogs = props.dogData
    return (
      <div className ='box'>
      {myDogs.map((dogs) => {
        return(
          <div key = {`player-${dogs.id}`} className='dog'>
            <div>{dogs.name}</div>
            <div>{dogs.breed}</div>
            <div>{dogs.status}</div>
          </div>
        )
      })}
    </div>
      
    );
  };

export default Dogs;