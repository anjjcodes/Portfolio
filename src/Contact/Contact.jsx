import React, { useEffect } from "react";
import "./Contact.css";
import anjali from "../assets/anjali.png";
import { contact } from "../assets/assets";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

const Contact = () => {
   useGSAP(() => {
  gsap.fromTo(
    ".anj-img",
    {
      x: -300,
      opacity: 1,
    },
    {
      x: 50, // overshoot to the right
      opacity: 1,
      duration: 2,
      ease: "back.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".anj-img",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },   

    })
   })
  return (
    <div>
      <div className="contact-container">
        <div className="anj-img">
          <img src={anjali} alt="" className="contact-anj" />
        </div>
        <div className="c-details">
          <h1 className="contact">CONTACT</h1>
          <div className="links">
            {contact.map((ele, index) => (
              <>
                <div className="each-link">
                  <img src={ele.img} alt="" className="icon" />
                  <p className="link">{ele.link}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
