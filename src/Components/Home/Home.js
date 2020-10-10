import React from 'react'
import FeatureService from './FeatureService'
import Header from './Header'
import Sevices from './Sevices'
import MakeAppointment from './MakeAppointment'
import Testomonial from './Testomonial'
import Blog from './Blog'

function Home() {
    return (
        <div>
            <Header/>
            <Sevices/>
            <FeatureService/>
            <MakeAppointment/>
            <Testomonial/>
            <Blog/>
        </div>
    )
}

export default Home
