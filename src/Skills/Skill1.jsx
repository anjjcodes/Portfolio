import React from 'react'
import './Skill1.css'
import { webdevskill } from '../assets/assets'

const Skill1 = () => {
  return (
    <div>
        <div className="skill1-container">
            <h1 className="skills">SKILLS</h1>
            <h4 className="webdev">Web Development</h4>
            <div className="skills-grid">
                {webdevskill.map((skill,index)=>(
                    <div className="skill-items">
                        <img src={skill.image} alt="" className="each-skill" />
                        <p className="each-title">{skill.title}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Skill1
