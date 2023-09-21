import React from 'react'
import styled from 'styled-components'
import { f1CountryCodes } from '../utils/constants'

const CalendarProfile = ({race, code}) => {
  function getRaceTime(date, time){
    const [nRyear, nRmonth, nRday] = date.split('-')
    const [nRhours, nRminutes] = time.split(':');

    const today = new Date();
    const timeZone = today.getTimezoneOffset() / -60;

    const nextRaceDateFormatted = new Date(
        +nRyear,
        +nRmonth - 1,
        +nRday,
        +nRhours + timeZone,
        +nRminutes
      );
    
    return nextRaceDateFormatted
  }


  return (
    <CalendarCard>
      <div className='calendarInfo'>
          <h4>{race.raceName}</h4>
          <h5>Round {race.round}</h5>
          <p>{getRaceTime(race.date, race.time).toUTCString()}</p>
          <p >{race.raceName} @ {race.Circuit.circuitName}</p>
          
      </div>
      <div className='background'>
        <img className='image' src={`https://www.countryflagicons.com/SHINY/64/${code}.png`}/>
      </div>
    </CalendarCard>
  )
}

const CalendarCard = styled.div`
    width: 500px;
    height: 220px;
    background-color: #FFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    transition: 0.5s;
    .calendarInfo{
        text-align: left;
    }
    .background{
        height: 200px;
        width: 200px;
        border-radius: 8px;
    }
    .image{
        height: 150px;
        width: 150px;
        margin: 0 auto;
    }
    &:hover {
        margin-top: -10px;
        margin-bottom: 10px;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        width: 250px;
        height: 400px;
    }
`

export default CalendarProfile