import React from 'react'
import AboutHeader from './AboutHaeader/AboutHeader'
import Testimonial from './AboutHaeader/Testimonial/Testimonial'
import CustomerNumber from './AboutHaeader/CustomerNumber/CustomerNumber'
import LeadershipTeam from './AboutHaeader/Teams/Team'
// import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div >
       <AboutHeader />
     <Testimonial />
        {/* <CustomerNumber /> */}
      <LeadershipTeam />
       </div>
  )
}

export default About