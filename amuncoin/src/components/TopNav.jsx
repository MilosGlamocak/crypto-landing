import React from 'react'
import '../styles/TopNav.css'

function TopNav({scrollToHome, scrollToAbout, scrollToTokenomics, scrollToContact}) {
  return (
    <div className='topnavCont'>
        <div className='topnavRightCont'>
            <h2>AMUNCOIN</h2>
        </div>
        <div className='topnavCenterCont'>
            <p onClick={scrollToHome}>Home</p>
            <p onClick={scrollToAbout}>About</p>
            <p onClick={scrollToTokenomics}>Tokenomics</p>
            <p onClick={scrollToContact}>Contact</p>
        </div>
        <div className='topnavLeftCont'>
            <div className='buyBtn'><p>Buy</p></div>
        </div>
    </div>
  )
}

export default TopNav