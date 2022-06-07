import React from "react";
import './card-list.scss';
import Card from "../card/card";


const Cardlist = (props) => {
    return (
        <div className="card-list"> {
            props.monster.map(monster => ( // take the monster attribute from the props and map over it
                <Card key={monster.id} monster={monster}></Card>
            )
            )
        }
        </div>
    )
}

export default Cardlist;