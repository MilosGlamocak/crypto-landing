import React, { forwardRef } from 'react'
import '../styles/FirstPage.css'
import logo from '/images/asset2.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FirstPage = forwardRef((props, ref) => {

  const hash = '0x532f27101965dd16442E59d40670FaF5eBB142E4';

  const notify = () => {
    toast.info('🦄 Hash copied!', {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(hash)
    .then((res) => notify())
    
  }

  return (
    <div className='firstPageCont' ref={ref}>
      <div className='horizontal'>
        <div className='logoDiv'>
            <img src={logo} alt="" />
        </div>
        <div className='descriptionDiv'>
            <h2>AMUNCOIN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus fugit nostrum adipisci tempore id iste, aut cum natus esse.</p>
        </div>
      </div>
      <div className='hashCont' onClick={handleCopy}>
        <ContentCopyIcon className='copyIcon'/>
        <p>{hash}</p>
      </div>
      <div className='buyBtn buyBtnMobile'><p>Buy</p></div>
    </div>
  )
})

export default FirstPage