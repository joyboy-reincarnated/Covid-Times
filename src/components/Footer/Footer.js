import React from "react";
import "./footer.css"

const Footer = () => {
  return(
    <div className="footer">
        <div className="footer_top">
        <div className="target footer_section">
            <h1>Covid Targeted</h1>
            <p>Our mission is to make the earth recover with the movement of using the masks to fight viruses</p>
        </div>
        <div className="footer_section">
            <h1>About</h1>
            <ul>
                <li>About Us</li>
                <li>Features</li>
                <li>News & Blog</li>
            </ul>
        </div>
        <div className="footer_section">
            <h1>Movement</h1>
            <ul>
                <li>Why Mask</li>
                <li>Security</li>
            </ul>
        </div>
        <div className="footer_section">
            <h1>Partner</h1>
            <ul>
                <li>Out Partner</li>
                <li>Become a Partner</li>
            </ul>
        </div>
        <div className="footer_section">
            <h1>Support</h1>
            <ul>
                <li>FAQs</li>
                <li>Support Center</li>
                <li>Contact us</li>
            </ul>
        </div>
        </div>
        <div className="footer_bottom">
            <span><i className="fa-thin fas fa-xl fa-copyright"></i>
                All Rights Reserved</span>
            <div className="conditions">
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </div>
        </div>
    </div>
    );
};

export default Footer;
