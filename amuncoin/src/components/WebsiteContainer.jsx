import React from 'react'
import WebsiteBg from './WebsiteBg'
import '../styles/WebsiteContainer.css'
import TopNav from './TopNav'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import Contact from './Contact'

function WebsiteContainer() {
  return (
    <div className='websiteCont'>
        <TopNav />
        <WebsiteBg />
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <Contact />
    </div>
  )
}

export default WebsiteContainer