import React, { useEffect } from "react";
import "./Front.css";
import anj from "../assets/anj.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Front = () => {
  useGSAP(() => {
    gsap.from(".anj", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "back.inOut",
    });
    gsap.from(".para", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "back.inOut",
    });
    gsap.from(".photo", {
      y: -300,
      delay: 0.2,
      opacity: 0,
      duration: 1.5,
      ease: "back.inOut",
    });
    gsap.to(".fullstack", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1,
    });
    gsap.to(".uiux", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1,
    });

    gsap.utils.toArray(".magnetic").forEach((btn) => {
      btn.addEventListener("mouseenter", () =>
        gsap.to(btn, { scale: 1.1, duration: 0.2, ease:"sine.inOut" })
      );
      btn.addEventListener("mouseleave", () =>
        gsap.to(btn, { scale: 1, duration: 0.2 })
      );
    });
  });

  return (
    <div>
      <div className="front-container">
        <p className="header">A girl with big eyes and big dreams</p>
        <div className="photo">
          <img src={anj} alt="" className="anj-foto" />
        </div>
        <div className="front-parts">
          <div className="name">
            <h1 className="anj">
              ANJALI <br></br>MANI AK
            </h1>
          </div>

          <div className="domain">
            <p className="para">
              Happily making pretty things that work. Sometimes it’s design,
              sometimes it’s code—most days, it’s both.
            </p>
            <h3 className="fullstack magnetic">FULL STACK DEVELOPER</h3>
            <h3 className="uiux magnetic">UI/UX DESIGNER</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
