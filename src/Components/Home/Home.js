import React from 'react'
import './Home.css'
import FeatureService from './FeatureService'
import Header from './Header'
import Sevices from './Sevices'
import MakeAppointment from './MakeAppointment'
import Testomonial from './Testomonial'
import Blog from './Blog'
import DoctorsProfile from './DoctorsProfile'
import Contact from './Contact'
import Footer from '../Shared/Footer'

function Home() {
    return (
        <div className="container">
            <Header />
            <Sevices/>
            <FeatureService/>
            <MakeAppointment/>
            <Testomonial/>
            <Blog/>
<DoctorsProfile/>
<Contact/>
<Footer/>
        </div>
    )
}

export default Home
