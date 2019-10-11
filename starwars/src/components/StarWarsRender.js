import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import styled from "styled-components";

const StarWarsRender = props => {
  const [personData, setPersonData] = useState([]);

  const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log(response.data.results);
        setPersonData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <FlexContainer>
      {personData.map((person, index) => {
        return (
          <StarWarsCard
            key={index}
            name={person.name}
            gender={person.gender}
            hairColor={person.hair_color}
            eyeColor={person.eye_color}
            skinColor={person.skin_color}
          />
        );
      })}
    </FlexContainer>
  );
};

export default StarWarsRender;
