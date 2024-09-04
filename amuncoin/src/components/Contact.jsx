import React, { forwardRef } from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import '../styles/Contact.css'
import XIcon from '@mui/icons-material/X';

const Contact = forwardRef((props, ref) => {
  return (
    <div className='contactCont' ref={ref}>
        <h2>Contact us:</h2>
        <p>example@gmail.com</p>
        <div className='contactsDiv'>
            <div className='contactDiv'><TelegramIcon /></div>
            <div className='contactDiv'><XIcon /></div>
        </div>
        <p className='copyright'>Copyright © 2024. All rights reserved.</p>
    </div>
  )
})

export default Contact