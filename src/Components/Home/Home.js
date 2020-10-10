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

function Home() {
    return (
        <div >
            <Header/>
            <Sevices/>
            <FeatureService/>
            <MakeAppointment/>
            <Testomonial/>
            <Blog/>
<DoctorsProfile/>
<Contact/>

        </div>
    )
}

export default Home
