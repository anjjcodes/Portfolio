import React, { useRef, useEffect } from 'react'
import { projects } from '../assets/assets'
import './ProjectSlider.css'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const ProjectSlider = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);


  return (
    <div className='slider-container' ref={containerRef}>
       <div className="projects-container" >
          <h1 className="proj">PROJECTS</h1>
          <h4 className="fav">MY FAVS ★</h4>
        </div>
        <div className="projects" ref={sliderRef}>
          {projects.map((ele, index) => (
            <div className="each-proj">
              <img src={ele.image} alt="" className="proj-img" />
              <div className="proj-desc">
                <p className="p-title"><strong>Title</strong> : {ele.title}</p>
                <p className="p-desc"><strong>Description</strong> : {ele.desc}</p>
                <p className="p-tech"><strong>Tech Stack</strong> : {ele.tech}</p>
                <p className="p-git"><strong>Github</strong> : {ele.git}</p>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default ProjectSlider
