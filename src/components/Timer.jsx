import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components';
import { DataFetchingContext } from '../DataFetchingContext';

const Timer = () => {
  const { nextRaceData, isLoadingNextRace, errorNextRace } = useContext(DataFetchingContext);
  const [raceData, setRaceData] = useState(null);

  useEffect(() => {
    // Check if nextRaceData is not null and has the required properties
    if (nextRaceData && nextRaceData.MRData && nextRaceData.MRData.RaceTable && nextRaceData.MRData.RaceTable.Races) {
      setRaceData(nextRaceData.MRData.RaceTable.Races[0]);
    }
  }, [nextRaceData]);

  useEffect(() => {
    // Call the countdown function only when raceData is not null
    if (raceData) {
      getCountdown(raceData.date, raceData.time);
    }
  }, [raceData]);

  if (isLoadingNextRace) {
    return <div>Loading next race data...</div>;
  }
  
  if (errorNextRace) {
    return <div>Error fetching next race data: {errorNextRace.message}</div>;
  }

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

  function getCountdown(date, time) {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    
    const countDown = getRaceTime(date, time).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            if(document.getElementById('days')){ document.getElementById("days").innerText = Math.floor(distance / (day))}
            if(document.getElementById('hours')){ document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))}
            if(document.getElementById('minutes')) {document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))}
            if(document.getElementById('seconds')) {document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)}
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("days").innerText = 0,
            document.getElementById("hours").innerText = 0,
            document.getElementById("minutes").innerText = 0,
            document.getElementById("seconds").innerText = 0;
            clearInterval(x);
          }
        }, 0)
    }

  if(raceData){  
  return (
    <TimerContainer>
      <div className="box-container">
          <h2>Next Race</h2>
          <p className='raceName'>{raceData.raceName} @ {raceData.Circuit.circuitName}</p>
          <p className='nextRaceDate'>{getRaceTime(raceData.date, raceData.time).toUTCString()}</p>
          <div id="countdown">
              <ul>
              <li><span id="days"></span>days</li>
              <li><span id="hours"></span>Hours</li>
              <li><span id="minutes"></span>Minutes</li>
              <li><span id="seconds"></span>Seconds</li>
              </ul>
          </div> 
      </div>
    </TimerContainer>
  )
  }

  return(<div></div>)
}

const TimerContainer = styled.div`
.box-container {
  background-color: #FFF;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 24px auto;
  padding: 16px;
  text-align: center;
  gap: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.box-container h1{
  font-size: 24px;
}

.raceName{
  font-size: 20px;
}

.nextRaceDate{
  font-size: 16x;
  font-weight: lighter;
}

#countdown{
  display: flex;
  margin-top: auto;
}

li {
  display: inline-block;
  font-size: 1rem;
  list-style-type: none;
  padding: 1rem 3rem;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 1.5rem;
}
`

export default Timer