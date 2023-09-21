import React from 'react'
import styled from 'styled-components'
import DriverStandings from '../components/DriverStandings'

const DriversPage = () => {
  return (
    <DriversContainer>
        <h1>2023 Driver's Standings</h1>
        <DriverStandings/>
    </DriversContainer>
  )
}

const DriversContainer = styled.div`
    margin: 2rem;
    text-align:center;
    width: 100%

`

export default DriversPage