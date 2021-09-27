import React from 'react';
import './Displayactor.css';

const DisplayActor = (props) => {
    //console.log(props)
    const { name, age, height, character, cost, img } = props.actor
    return (
        <div className="card">
            <img className="pictures" src={img} alt="" />
            <h1>Name : {name}</h1>
            <h2>Age  : {age}</h2>
            <h2>Height : {height}</h2>
            <p>Character : {character}</p>
            <p>Cost : ${cost}</p>
            <div className="icon">
                <span>
                    <h1><i class="fab fa-facebook-square"></i></h1>
                </span>
                <span>
                    <h1><i class="fab fa-twitter-square"></i></h1>
                </span>
            </div>
            <button
                onClick={() => props.handleSelect(props.actor)}
                className="selected-btn"
            ><i class="fas fa-check-square"></i> Select Artist</button>

        </div>
    );
};

export default DisplayActor;