import React from "react";
import "./About.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(()=>{
    gsap.from(".about", {
      y:100,
      ease: "back.out",
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }


    })
  })
  return (
    <div>
      <div className="about-container">
        <div className="about-parts">
            <div className="about-title">
          <h1 className="about">ABOUT</h1>
        </div>
        <div className="about-desc">
          <p className="ab-p">
            Hello, I’m Anjali, a 3rd-year Computer Science at SSN College of
            Engineering. I’m a Full Stack Developer and a UI/UX Designer. I love
            making things look pretty and aesthetic and also to fix codes which
            gives me side-eye. I love technology and anything related to it. I’m
            always naming my own sites, fixing each and every imperfect font to
            the perfect font, and giving life to every colour. Beyond the
            screen, I’m a romance and fiction reader who loves getting lost in
            heartfelt stories and imaginary worlds.
          </p>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default About;
