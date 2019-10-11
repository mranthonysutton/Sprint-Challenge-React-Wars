import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

const StarWarsRender = props => {
  const [personData, setPersonData] = useState([]);

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
    <div className="container">
      {/* {personData.map((person, index) => {
        return <StarWarsCard key={index} name={person} />;
      })} */}
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
    </div>
  );
};

export default StarWarsRender;
