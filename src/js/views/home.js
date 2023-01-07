import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import HomeCard from "../component/HomeCard";

export const Home = () => {
  const [characters, setCharacters] =useState([]);
  const[planets, setPlanets] = useState([]);
  const[vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://swapi.tech/api/people').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      setCharacters(data.results)
    })
    fetch('https://swapi.tech/api/planets').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      setPlanets(data.results)
    })
    fetch('https://swapi.tech/api/vehicles').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      setVehicles(data.results)
    })
  }, [])

  return (
    <div>
      <h2 className="characters-title">Characters</h2>
      <div className="characters-container">
        {characters.length ? characters.map(character => {
            return(<HomeCard character={character}/>)
        }) : null}
      </div>
      <h2 className="planets-title">Planets</h2>
      <div className="planets-container">
        {planets.length ? planets.map(planet => {
          return (<HomeCard planet={planet}/>)
        }) : null}
      </div>
      <h2 className="vehicles-title">Vehicles</h2>
      <div className="vehicles-container">
      {vehicles.length ? vehicles.map(vehicle => {
            return(<HomeCard vehicle={vehicle}/>)
        }) : null}
      </div>
    </div>
  );
};
