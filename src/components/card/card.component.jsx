import React from 'react';
import './card.styles.css';
export const Card = props => (
    <div className='card-container'>
        <img alt="monsters" src={`https://robohash.org/${props.monsters.id}?set=set2&size=160x160`}
        />
        <h2> {props.monsters.name} </h2>
        <p> {props.monsters.email} </p>
    </div >
)