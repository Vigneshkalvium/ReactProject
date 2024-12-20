import React from 'react'
import "./Console.css"
import consoleBackgroundVideo from "../videos/consoleBackgrond.mp4"
import { useNavigate } from 'react-router-dom';

const Console = () => {
    const navigate = useNavigate()

    const handleMembers=()=>{
        navigate('/members');
    }
    const handleMemories=()=>{
        navigate('/memories')
    }
  return (
    <div className='consoleCantainer'>
        <video className='backGround' autoPlay loop muted>
            <source src={consoleBackgroundVideo}/>
        </video>
        <div className='console-content'>
            <div className="memories" onClick={handleMemories}>
                <p>Memories</p>
            </div>
            <div className="memories" onClick={handleMembers}>
                <p>Members</p>
            </div>
            <div className="memories">
                <p>projects</p>
            </div>
        </div>
    </div>
  )
}

export default Console
