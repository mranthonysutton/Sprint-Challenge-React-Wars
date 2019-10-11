import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import styled from "styled-components";

const StarWarsRender = props => {
  const [personData, setPersonData] = useState([]);
  const [pageControl, setPageControl] = useState(1);

  // Styled Components
  const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  const ButtonContainer = styled.div`
    background-color: rgba(81, 87, 81, 0.6);
    color: #fff;
    width: 30%;
    padding: 2rem;
    margin: 1rem auto;
    box-shadow: 1px 2px 5px #63585e;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const PaginationButtons = styled.button`
    padding: 3%;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    background: #52489c;
    color: #ebebeb;
    font-size: 1.2rem;

    &:hover {
      box-shadow: 1px 3px 2px #52489c;
  `;

  // Axios API data fetch
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageControl}`)
      .then(response => {
        console.log(response.data);
        setPersonData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pageControl]);

  return (
    <>
      <ButtonContainer>
        <h1>Page: {pageControl}</h1>
        <PaginationButtons onClick={() => setPageControl(pageControl - 1)}>
          Prev
        </PaginationButtons>
        <PaginationButtons onClick={() => setPageControl(pageControl + 1)}>
          Next
        </PaginationButtons>
      </ButtonContainer>
      <FlexContainer>
        {/* Maps through api response data and assign props to each person */}
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
    </>
  );
};

export default StarWarsRender;
