import React from 'react'
import FeatureService from './FeatureService'
import Header from './Header'
import Sevices from './Sevices'
import MakeAppointment from './MakeAppointment'
import Testomonial from './Testomonial'
import Blog from './Blog'
import DoctorsProfile from './DoctorsProfile'

function Home() {
    return (
        <div>
            <Header/>
            <Sevices/>
            <FeatureService/>
            <MakeAppointment/>
            <Testomonial/>
            <Blog/>
<DoctorsProfile/>

        </div>
    )
}

export default Home
