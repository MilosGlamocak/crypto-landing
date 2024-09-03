import React from 'react'
import '../styles/TopNav.css'

function TopNav({home, about, tokenomics}) {
  return (
    <div className='topnavCont'>
        <div className='topnavRightCont'>
            <h2>AMUNCOIN</h2>
        </div>
        <div className='topnavCenterCont'>
            <p>Home</p>
            <p>About</p>
            <p>Tokenomics</p>
            <p>Contact</p>
        </div>
        <div className='topnavLeftCont'>
            <div className='buyBtn'><p>Buy</p></div>
        </div>
    </div>
  )
}

export default TopNav