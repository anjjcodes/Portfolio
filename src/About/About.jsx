import React, {useEffect} from "react";
import "./About.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {

  
  useGSAP(() => {

    gsap.from(".about", {
      y: 100,
      ease: "back.out",
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.fromTo(".ab-p",{
      opacity : 0, y:0
    },
  {
    opacity:1,
    y:0,
    duration: 5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".ab-p",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })

  });

  useEffect(() => {
  const para = document.querySelector(".ab-p");
  if (!para) return;

  const words = para.innerText.split(" ");
  para.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");

  gsap.utils.toArray(".word").forEach((word) => {
    word.addEventListener("mouseenter", () => {
      gsap.killTweensOf(word);

      gsap.to(word, {
        y: -10,
        scale: 1.2,
        duration: 0.02,
        ease: "back.out",
      });
    });

    word.addEventListener("mouseleave", () => {
      gsap.killTweensOf(word);

      gsap.to(word, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "sine.inOut",
      });
    });
  });

}, []);



  return (
    <div>
      
      <div className="about-container">
        <div className="about-parts">
          <div className="about-title">
            <h1 className="about">ABOUT</h1>
          </div>
          <div className="about-desc">
            <p className="ab-p">
              Hello, I’m Anjali, a 3rd-year Computer Science Student at SSN College of
              Engineering. I’m a Full Stack Developer and a UI/UX Designer. I
              love making things look pretty and aesthetic and also to fix codes
              which gives me side-eye. I love technology and anything related to
              it. I’m always making my own sites, fixing each and every
              imperfect font to the perfect font, and giving life to every
              colour. Beyond the screen, I’m a romance and fiction reader who
              loves getting lost in heartfelt stories and imaginary worlds. So if
              you ever see me staring I'm probably thinking about my site or my
              fictional charecter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
