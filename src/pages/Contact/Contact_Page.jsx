import React from 'react'
import ContactUs from './Contact_UsHero'
import ContactForm from './ContactForm'
import ContactDetail from './ContactDetail'
// import Footer from '../Footer/Footer'
import ContactMessages from './ContactMessages'

const Contact_Page = () => {
  return (
    <div>
        <ContactUs />
        <ContactDetail />
        <ContactForm />
        {/* <Footer /> */}
    </div>
  )
}

export default Contact_Page