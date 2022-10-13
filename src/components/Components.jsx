import React from 'react'

const Components = (props) => {
  const myDogs = props.dogData
    return (
      <div className ='box'>{}
      {myDogs.map((dogs) => {
        return(
          <div key = {`player-${puppy.id}`} className='dog'>
            <div>{dogs.name}</div>
            <div>{dogs.breed}</div>
            <div>{dogs.status}</div>
          </div>
        )
      })}
    </div>
      
    );
  };

export default Components;