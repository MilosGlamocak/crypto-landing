import React, { useRef } from 'react';
import WebsiteBg from './WebsiteBg';
import '../styles/WebsiteContainer.css';
import TopNav from './TopNav';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Contact from './Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WebsiteContainer() {
  const firstPageRef = useRef(null);
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='websiteCont'>
      <TopNav 
        scrollToHome={() => scrollToRef(firstPageRef)}
        scrollToAbout={() => scrollToRef(secondPageRef)}
        scrollToTokenomics={() => scrollToRef(thirdPageRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <WebsiteBg />
      <FirstPage ref={firstPageRef}/>
      <SecondPage ref={secondPageRef} />
      <ThirdPage ref={thirdPageRef} />
      <Contact ref={contactRef} />
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default WebsiteContainer;
