import React from 'react'
import FeatureService from './FeatureService'
import Header from './Header'
import Sevices from './Sevices'
import MakeAppointment from './MakeAppointment'

function Home() {
    return (
        <div>
            <Header/>
            <Sevices/>
            <FeatureService/>
            <MakeAppointment/>
        </div>
    )
}

export default Home
