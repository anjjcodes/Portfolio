import React from "react";
import "./Contact.css";
import anjali from "../assets/anjali.png";
import { contact } from "../assets/assets";
const Contact = () => {
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
