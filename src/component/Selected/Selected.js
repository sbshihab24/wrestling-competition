import React from 'react';
import './Selected.css';

const Selected = (props) => {
    const { selected } = props;
    let total = 0;
    for (const actor of selected) {
        total = total + actor.cost;
    }
    let name = '';
    for (const actor of selected) {
        name = name + actor.name
    }
    return (
        <div className="selected">
            <h1>Selected : <span className="orange-color"> {props.selected.length} </span> </h1>
            <h1>Total Cost: <span className="orange-color"> {total}$ </span> </h1>
            <h2>{name}</h2>


        </div>
    );
};

export default Selected;