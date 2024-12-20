import React from 'react'
import "./HomePage.css"
import BackgroundVideo from "../videos/HomeBackground.mp4"
import buttonani from "../videos/button.lottie"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate()

  const handlenavigate =()=>{
    navigate('/console')
  }
  return (
    <div className='Home-container'>
      <video className='backGround' autoPlay loop muted>
        <source src={BackgroundVideo}/>
      </video>
      <div className="gradient"></div>
      <div className="conten">
        <div className="s76">S76</div>
        <div className="tittle"  data-aos="fade-right">
          <h1>Squad-76</h1>
        </div>
        <div className="tagName" data-aos="fade-left">
          <p>One Team, One Stream, Unstoppable Stream!</p>
        </div>
        <div className='button' onClick={handlenavigate} data-aos="fade-right">
          <DotLottieReact
            src={buttonani}
            loop
            autoplay
            className='animation'
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
