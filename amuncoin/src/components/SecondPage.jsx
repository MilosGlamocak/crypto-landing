import React from 'react'
import '../styles/SecondPage.css'
import image from '/images/Concept_Art_golden_amun_ra_the_egyptian_god_sitting_on_a_thron_1.jpg'

function SecondPage() {
  return (
    <div className='secondPageCont'>
      <div className='descHeader'>
        <h2>AMUN</h2>
        <div></div>
        <p>The god of gods</p>
      </div>
      
      <div className='descriptionCont'>
        <div className='descLeft'>
          <img src={image} alt="" />
        </div>
        <div className='descRight'>
          <h2>Who is Amun?</h2>
          <p>Amun is the chief god of all Egyptian deities. He is worshiped as the creator of all things, including himself and all other deities. Thus, he is all-powerful. He has also become the mascot of the AMUNCOIN chain.</p>
        </div>
      </div>
    </div>
  )
}

export default SecondPage