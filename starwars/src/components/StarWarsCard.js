import React from "react";

const StarWarsCard = props => {
  return (
    <div className="starwars-card" key={props.name}>
      <h1>Name: {props.name}</h1>
      <ul>
        <li>Gender: {props.gender}</li>
        <li>Hair Color: {props.hairColor}</li>
        <li>Skin Color: {props.skinColor}</li>
        <li>Eye Color: {props.eyeColor}</li>
      </ul>
    </div>
  );
};

export default StarWarsCard;
