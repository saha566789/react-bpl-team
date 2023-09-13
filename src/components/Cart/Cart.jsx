import React from 'react';

const Cart = ({selectActors, remaining, totalCost}) => {
    console.log(selectActors)
    return (
        <div>
           <h3>total: {selectActors.length}</h3>
           <h4>Remaining: {remaining}</h4>
           <h4>TotalCost: {totalCost}</h4>
           {
            selectActors.map((actor,idx )=>(
                <li key={idx}>{actor.name}</li>
            ))
           }
        </div>
    );
};

export default Cart;