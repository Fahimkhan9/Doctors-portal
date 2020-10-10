import React from 'react'
import HeaderMain from './HeaderMain'
import Nav from './Nav'
import './Header.css'
import BusinessInfo from './BusinessInfo'
function Header() {
    return (
        <div className="header-container">
            <Nav/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    )
}

export default Header
