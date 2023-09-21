import React from 'react'
import styled from 'styled-components'
import logo from '../assets/formula-1-logo-7.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {links} from '../utils/constants'

const Navbar = ({isSideBarOpen, setIsSideBarOpen}) => {

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt="f1 dashboard"/>
          </Link>
          <button type='button' className='nav-toggle' onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map(link => {
            const {id, text, url} = link

            return <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          })}
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: red;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 1150px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid red;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar