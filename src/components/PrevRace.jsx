import React, { useContext } from 'react';
import { DataFetchingContext } from '../DataFetchingContext';
import styled from 'styled-components';

const PrevRace = () => {
    const { lastRaceData, isLoadingLastRace, errorLastRace } = useContext(DataFetchingContext);
  
    if (isLoadingLastRace) {
      return <div>Loading driver standings...</div>;
    }
  
    if (errorLastRace) {
      return <div>Error fetching driver standings: {errorLastRace.message}</div>;
    }

    return (
    <PrevRaceContainer>
      <div className='prevRaceContainer'>
        <h1>Previous Race Results</h1>
        <p className='raceName'>{lastRaceData.MRData.RaceTable.Races[0].raceName} @ {lastRaceData.MRData.RaceTable.Races[0].Circuit.circuitName}</p>
        <table>
        <thead>
            <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Time</th>
            <th>Points</th>
            </tr>
        </thead>
        <tbody>
            {lastRaceData.MRData.RaceTable.Races[0].Results.map((standing, index) => (
            <tr key={index} className='tr'>
                <td>{standing.position}</td>
                <td>{`${standing.Driver.givenName} ${standing.Driver.familyName}`}</td>
                <td>{standing.Constructor.name}</td>
                <td>{standing.Time ? standing.Time.time : standing.status}</td>
                <td>{standing.points}</td>
            </tr>
            ))}
        </tbody>
        </table>
      </div>
    </PrevRaceContainer>
    );
  };

  export const PrevRaceContainer = styled.div`
  .prevRaceContainer{
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: auto;
    margin: 24px auto;
    padding: 16px;
    text-align: center;
    gap: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

@media screen and (max-width: 800px) {
    .prevRaceContainer {
      width: 500px;
    }
}

table{
    border-collapse: collapse;
}

th, td{
    border-bottom: 1px solid #b3b3b3;
    padding-right: 20px;
    padding-bottom: 8px;
    padding-top: 8px;
}

p{
  font-size: 20px;
}
  `

export default PrevRace