import React, { useEffect } from 'react'
import './Skill1.css'
import { webdevskill } from '../assets/assets'
import { SplitText , ScrollTrigger} from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Skill1 = () => {

  useGSAP(() => {
    const skillEl = document.querySelector(".skills");

    gsap.fromTo(skillEl, 
      { 
        letterSpacing: "0px",  // start with normal spacing
        opacity: 0
      },
      { 
        letterSpacing: "15px", // expand spacing
        opacity: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: "sine.out",
        scrollTrigger: {
          trigger: skillEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  });
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
