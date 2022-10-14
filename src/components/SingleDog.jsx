import React from 'react'

const SingleDog = (props) => {
    const setDog = props.dog
        async function getDog(dog){
        try {
            const response = await fetch(
             `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players/${dog.id}`
            );
            const result = await response.json();
            setDog(result.data.player)
            } catch (err) {
                console.error(err);
            }
        }
}

export default SingleDog;