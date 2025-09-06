import React, { useRef, useEffect } from "react";
import { projects } from "../assets/assets";
import "./ProjectSlider.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ProjectSlider = () => {
  const sliderRef = useRef(null);
  const containerRed = useRef(null);
  const textRef = useRef(null);
  useGSAP(() => {
    const totwodth = containerRed.current.scrollWidth - window.innerWidth;

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

    gsap.from(textRef.current.querySelectorAll(".split"), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "back.out",
      stagger: {
        each: 0.08,
        from: "center", 
      },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%", 
        end: "bottom 60%",
       
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".each-proj", {
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  duration: 2,
  stagger:0.05 ,
});

  }, []);

  return (
    <section className="slider-container" ref={sliderRef}>
      <div className="slider-wrapper" ref={containerRed}>
        <div className="projects-container">
          <h1 className="proj" ref={textRef}>
            <span className="split">P</span>
            <span className="split">R</span>
            <span className="split">O</span>
            <span className="split">J</span>
            <span className="split">E</span>
            <span className="split">C</span>
            <span className="split">T</span>
            <span className="split">S</span>
          </h1>
          <p className="fav">
            Some of my favorite works that shows how i think, design and build
          </p>
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
                <a href = {ele.git}>
                  <button className="git">
                  Github
                </button>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
