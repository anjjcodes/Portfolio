import React, { useEffect } from 'react'
import './Skill1.css'
import { webdevskill } from '../assets/assets'
import { SplitText , ScrollTrigger} from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Skill1 = () => {

    useEffect(() => {
        const split = new SplitText(".skills", {
            type: 'chars'
        })

        gsap.from(split.chars,{
            y:-100,
            opacity:0,
            duration:0.8,
            ease: "bounce.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: split.chars,
                start: "top 80%",
                toggleActions: "play none none reverse",

            }
        })
    })
  return (
    <div>
        <div className="skill1-container">
            <h1 className="skills">SKILLS</h1>
            <h4 className="webdev">Web Development</h4>
            <div className="skills-grid">
                {webdevskill.map((skill,index)=>(
                    <div className="skill-items" style={{"--glow": skill.glow}}>
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
