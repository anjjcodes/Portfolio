import React, { useRef, useEffect } from "react";
import { projects } from "../assets/assets";
import "./ProjectSlider.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectSlider = () => {
  const sliderRef = useRef(null);
  const containerRed = useRef(null);

  useGSAP(() => {
    const totwodth = sliderRef.current.scrollWidth - window.innerWidth;
    gsap.to(containerRed.current, {
      x: -totwodth,
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top top",
        end: () => `+=${totwodth + window.innerWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <section className="slider-container" ref={sliderRef}>
      <div className="slider-wrapper" ref={containerRed}>
        <div className="projects-container">
          <h1 className="proj">PROJECTS</h1>
          <h4 className="fav">MY FAVS ★</h4>
        </div>
        <div className="projects">
          {projects.map((ele, index) => (
            <div className="each-proj">
              <img src={ele.image} alt="" className="proj-img" />
              <div className="proj-desc">
                <p className="p-title">
                  <strong>Title</strong> : {ele.title}
                </p>
                <p className="p-desc">
                  <strong>Description</strong> : {ele.desc}
                </p>
                <p className="p-tech">
                  <strong>Tech Stack</strong> : {ele.tech}
                </p>
                <p className="p-git">
                  <strong>Github</strong> : {ele.git}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
