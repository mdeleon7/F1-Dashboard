import React, {useContext} from 'react'
import styled from 'styled-components'
import { DataFetchingContext } from '../DataFetchingContext';
import CalendarProfile from './CalendarProfile';
import { f1CountryCodes } from '../utils/constants'


const Calendar = () => {
  const { scheduleData, isLoadingSchedule, errorSchedule } = useContext(DataFetchingContext);

  if (isLoadingSchedule) {
      return <div>Loading Schedule...</div>;
    }
  
  if (errorSchedule) {
      return <div>Error fetching Schedule: {errorSchedule.message}</div>;
    }

  const findCountryCode = (id) => {
    return f1CountryCodes.find((country) => country.circuitId === id)
  }

  return (
    <CalendarList>
      {scheduleData.MRData.RaceTable.Races.map((race, index) => {
        const country = findCountryCode(race.Circuit.circuitId)
        
        
        return <CalendarProfile key={index} race={race} code={country.countryCode}/>
      })}
    </CalendarList>
  )
}

const CalendarList = styled.div`
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

export default Calendar