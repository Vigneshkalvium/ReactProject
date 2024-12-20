import React from 'react'
import imgbg from "../images/bg1.png"
import "./Members.css"

const Members = ({mentordata, SquadMatesdata}) => {
  return (
    <div className="mainContainer">
      <div className="bg">
        <img src={imgbg} alt="" />
      </div>
      <div className="s76">S76</div>
      
      <div className='mentor-cotainer'>
        <h1 className='heading'>ROLE MODEL💫
        </h1>
        <div className="men">
          {mentordata.map((mentor)=>(
            <div className="metor">

          </div>
          ))}
        </div>
        <h1>CHAMPIONS 😎</h1>
        <div className="squad-container">
          { SquadMatesdata.map((mate)=>(
            <div className="squad-card" data-aos="zoom-in">
              <div className="fron">
                <div className="front-content">
                  <img src={mate.img} alt="" />
                  <div className="name">
                    <h3>{mate.name}</h3>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="des">
                  <div className="des-name">
                    <h3>{mate.name}</h3>
                  </div>
                  <div className="des-con">
                    <p>{mate.alt}</p>
                  </div>  
                </div>
              </div>
            </div>
          ))

          }
        </div>
      </div>
    </div>
  )
}

export default Members
