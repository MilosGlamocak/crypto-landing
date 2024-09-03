import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import '../styles/Contact.css'
import XIcon from '@mui/icons-material/X';

function Contact() {
  return (
    <div className='contactCont'>
        <div className='contactsDiv'>
            <div className='contactDiv'><TelegramIcon /></div>
            <div className='contactDiv'><XIcon /></div>
        </div>
        
        <p className='copyright'>Copyright © 2024. All rights reserved.</p>
    </div>
  )
}

export default Contact