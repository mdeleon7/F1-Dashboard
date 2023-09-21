import React from 'react'
import styled from 'styled-components'
import Calendar from '../components/Calendar'

const CalendarPage = () => {
  return (
    <CalendarContainer>
        <h1>2023 Calendar</h1>
        <Calendar/>
    </CalendarContainer>
  )
}

const CalendarContainer = styled.div`
    margin: 2rem;
    text-align:center;
`

export default CalendarPage