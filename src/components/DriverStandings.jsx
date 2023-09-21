import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataFetchingContext } from '../DataFetchingContext';
import DriverProfile from './DriverProfile';
import styled from 'styled-components';
import { f1DriverLinks } from '../utils/constants';


const DriverStandings = () => {
    const { driverStandingsData, isLoadingDriverStandings, errorDriverStandings } = useContext(DataFetchingContext);

    if (isLoadingDriverStandings) {
      return <div>Loading driver standings...</div>;
    }
  
    if (errorDriverStandings) {
      return <div>Error fetching driver standings: {errorDriverStandings.message}</div>;
    }

    function findDriverByCode(code) {
      return f1DriverLinks.find((driver) => driver.code === code);
    }

    return (
    <DriversList>
      {driverStandingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((standing, index) => {
        const driver = findDriverByCode(standing.Driver.code)
        
        return <DriverProfile key={index} standing={standing}  imageUrl={driver.imageUrl} bgColor={driver.bgColor}/>;
      })}
    </DriversList>
    );
  };

const DriversList = styled.div`
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

export default DriverStandings