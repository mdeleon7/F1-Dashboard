import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ConstructorStandings from '../components/ConstructorStandings';

const ConstructorsPage = () => {

  return (
    <ConstructorsContainer>
      <h1>2023 Constructor's Standings</h1>
      <ConstructorStandings />
    </ConstructorsContainer>
  )
}

const ConstructorsContainer = styled.div`
    margin: 2rem;
    text-align:center;
`

export default ConstructorsPage