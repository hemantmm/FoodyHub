import Image from 'next/image'
import React from 'react'
import logo from '../../../public/1.png'


function ImproveSkills() {

    const list=[
        "Learn new recipes",
        "Experiment with Food",
        "Write your own recipe",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked",

    ]

  return (
    <div className='section improve-skills'>
        <div className='col imgs'>
          <Image className='improveImg' src={logo} />
          </div>

        <div className='col typography'>
            <h1 className='title'>Improve your Culinary Skills</h1>
            {list.map((item,index)=>(
                <p className='skill-item' key={index}>{item}</p>
            ))}
            <button className='btn'>SIGNUP NOW</button>
        </div>
        
    </div>
  )
}

export default ImproveSkills