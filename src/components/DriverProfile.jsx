import React from 'react'
import styled from 'styled-components'

const DriverProfile = ({standing, imageUrl, bgColor}) => {
    
  return (
    <DriverCard>
        <div className='driverInfo'>
            <h3 style={{color: bgColor}}>{standing.Driver.givenName} {standing.Driver.familyName}</h3>
            <h5 style={{color: bgColor}}>{standing.Constructors[0].name}</h5>
            <p>Standing: {standing.position}</p>
            <p>Wins: {standing.wins}</p>
            <p>Points: {standing.points}</p>
        </div>
        <div className='background' style={{backgroundColor: bgColor}}>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
            </div>
        </div>
    </DriverCard>
  )
}

const DriverCard = styled.div`
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
    .driverInfo{
        text-align: left;
    }
    .background{
        height: 150px;
        width: 150px;
        border-radius: 8px;
    }
    .image{
        height: 150px;
        width: 140px;
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

export default DriverProfile