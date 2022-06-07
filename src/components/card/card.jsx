import React from "react";
import './card.scss';

const Card = (props) => {
    let slug = props.monster.id + 991;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${slug})?set=set4&size=160x160`} alt="" />
            <h2 >{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;