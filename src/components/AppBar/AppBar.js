import React from 'react'
import Logo from './Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import TrailingIcons from './TrailingIcon/TrailingIcons'

import "./AppBar.css"
import { NavLink } from 'react-router-dom'
const AppBar = () => {
    return (
        <>
        <div className='' id='topAppBar'>
            <Logo/>
            <menu>
            <NavLink className="bottomNavBarItem" to="/"> <span className="caption">Home</span> </NavLink>
         <NavLink className="bottomNavBarItem" to="/medicine"> <span className="caption">Medicines</span> </NavLink>
         <NavLink className="bottomNavBarItem" to="/profile"> <span className="caption">Health Care</span> </NavLink>
         <NavLink className="bottomNavBarItem" to="/labtest"> <span className="caption">Lab Test</span> </NavLink>
         <NavLink className="bottomNavBarItem" to="/consult"> <span className="caption">Consult</span> </NavLink>
            </menu>
           
            <TrailingIcons/>
        </div>
            
        </>

    )
}

export default AppBar
