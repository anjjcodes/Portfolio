import React from 'react'
import './Skill2.css'
import { languages } from '../assets/assets'

const Skill2 = () => {
  return (
    <div>
        <div className="skill2-conatiner">
            <h4 className="lang">Languages</h4>
            <div className="skill2-grid">
                {languages.map((skills,index)=>(
                    <div className="skill2-items" style={{"--glow": skills.glow}}>
                        <img src={skills.image} alt="" className="each-skill" />
                        <p className="each-title2">{skills.title}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Skill2
