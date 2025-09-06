import React, { useEffect , useRef} from "react";
import "./Contact.css";
import anjali from "../assets/anjalii.png";
import { contact } from "../assets/assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";

const Contact = () => {
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".anj-img",
      {
        x: -300,
        opacity: 1,
      },
      {
        x: 0, // overshoot to the right
        opacity: 1,
        duration: 2,
        ease: "back.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".anj-img",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.to(".icon", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1,
    });
    const split = new SplitType(textRef.current, {
      types:"chars"
    })

    gsap.from(split.chars,{
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 100%",
        end: "top 30%",
        scrub: true,
      },
      x:() => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300,300),
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "sine.out"
    })
  });
  return (
    <div>
      <div className="contact-container">
        <div className="anj-img">
          <img src={anjali} alt="" className="contact-anj" />
        </div>
        <div className="c-details">
          <h1 className="contact" ref= {textRef}>CONTACT</h1>
          <p className="c-para">
            I’m always excited to connect with new people! Whether you have an
            opportunity, want to collaborate, or just want to say hi — feel free
            to reach out.
          </p>
          <div className="links">
            {contact.map((ele, index) => (
              <a
                key={index} 
                className="each-link"
                href={ele.link}
                target="_blank"
                rel="noopener noreferrer"
                title={ele.name} 
              >
                <img src={ele.img} alt={ele.name} className="icon" />{" "}
               
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
