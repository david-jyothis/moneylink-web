import React from 'react'
import Navbar from '../../Navbar/Platform'
// import Footer from '../../../Footer/Moneylink'
import Hero from './Hero';
import './style.css';
import Body from './Body';

const Main = () => {
  return (
    <>
      <div id="AccountManagement">
        <Navbar />
        <Hero />
        <Body />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Main