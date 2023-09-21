import React from 'react'
import styled from 'styled-components'

const ConstructorProfile = ({standing, bgColor, imageUrl}) => {
  return (
    <DriverCard>
        <div className='constructorInfo'>
            <h3 style={{color: bgColor}}>{standing.Constructor.name}</h3>
            <p>Standing: {standing.position}</p>
            <p>Wins: {standing.wins}</p>
            <p>Points: {standing.points}</p>
        </div>
        <div className='background'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
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
    .constructorInfo{
        text-align: left;
    }
    .background{
        height: 200px;
        width: 200px;
        border-radius: 8px;
    }
    .image{
        height: 200px;
        width: 200px;
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

export default ConstructorProfile