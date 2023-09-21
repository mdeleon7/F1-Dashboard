import React, { useState, useEffect, useContext } from 'react';
import { DataFetchingContext } from '../DataFetchingContext';
import styled from 'styled-components';
import ConstructorProfile from '../components/ConstructorProfile';
import { f1ConstructorLinks } from '../utils/constants';

const ConstructorStandings = () => {
    const { constructorStandingsData, isLoadingConstructorStandings, errorConstructorStandings } = useContext(DataFetchingContext);

    if (isLoadingConstructorStandings) {
      return <div>Loading Constructor standings...</div>;
    }
  
    if (errorConstructorStandings) {
      return <div>Error fetching Constructor standings: {errorConstructorStandings.message}</div>;
    }

    function findConstructorByName(name) {
      return f1ConstructorLinks.find((constructor) => constructor.name === name);
    }


  return (
    <ConstructorsList>
      {constructorStandingsData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((standing, index) => {
        const constructor = findConstructorByName(standing.Constructor.name)

        return <ConstructorProfile key={index} standing={standing} bgColor={constructor.bgColor} imageUrl={constructor.imageUrl}/>
      })}
    </ConstructorsList>
  )
}

const ConstructorsList = styled.div`
  margin: 1.5rem 5rem;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
  @media (min-width: 1100px) {
    grid-template-columns: auto auto;
    
  }
  @media (min-width: 1450px) {
    grid-template-columns: auto auto auto;
  }
`


export default ConstructorStandings