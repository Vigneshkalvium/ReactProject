import React from 'react'
import "./Memories.css"
const Memories = ({MemoryData}) => {
  return (
    <div className="memory-container">
        <div className="title">
            <h1>NOSTALGIA</h1>
        </div>
        <div className="memory-content">
            {MemoryData.map((memory)=>(
                <section className='memo'>
                        <div className="memorydata">
                            <div className="image">
                                <img src={memory.img} alt="" />
                            </div>
                            <div className="text">
                                <h1></h1>
                            </div>
                        </div>
                </section>
            ))}
        </div>

    </div>
  )
}

export default Memories
