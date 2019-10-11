import React from "react";
import styled from "styled-components";

const CharacterCardWrapper = styled.div`
  background-color: rgba(81, 87, 81, 0.6);
  color: #fff;
  width: 40%;
  padding: 2rem;
  margin: 1rem 0;
  box-shadow: 1px 2px 5px #63585e;
`;

const NameTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Mansalva&display=swap");
  font-family: "Mansalva", cursive;
  font-size: 3.5rem;
`;

const DescriptionElements = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Grenze&display=swap");
  font-family: "Grenze", serif;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  color: #eee;
`;

const StarWarsCard = props => {
  return (
    <CharacterCardWrapper key={props.name}>
      <NameTitle>{props.name}</NameTitle>
      <DescriptionElements>Gender: {props.gender}</DescriptionElements>
      <DescriptionElements>Hair Color: {props.hairColor}</DescriptionElements>
      <DescriptionElements>Skin Color: {props.skinColor}</DescriptionElements>
      <DescriptionElements>Eye Color: {props.eyeColor}</DescriptionElements>
    </CharacterCardWrapper>
  );
};

export default StarWarsCard;
