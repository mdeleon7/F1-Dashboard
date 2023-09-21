import React, { useState } from 'react'
import {Navbar, Sidebar} from '../components'

const Header = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    
    return (
    <>
        <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
        <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
    </>
  )
}

export default Header