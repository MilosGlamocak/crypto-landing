import React from 'react'
import '../styles/FirstPage.css'
import logo from '/images/asset2.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function FirstPage() {
  return (
    <div className='firstPageCont'>
      <div className='horizontal'>
        <div className='logoDiv'>
            <img src={logo} alt="" />
        </div>
        <div className='descriptionDiv'>
            <h2>AMUNCOIN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus fugit nostrum adipisci tempore id iste, aut cum natus esse.</p>
        </div>
      </div>
      <div className='hashCont'>
        <ContentCopyIcon className='copyIcon'/>
        <p>0x532f27101965dd16442E59d40670FaF5eBB142E4</p>
      </div>
      <div className='buyBtn buyBtnMobile'><p>Buy</p></div>
    </div>
  )
}

export default FirstPage