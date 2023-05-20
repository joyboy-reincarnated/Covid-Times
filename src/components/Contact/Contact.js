import React from "react";
import "./contact.css"



const Contact = () => {

  return( <>
  <div className="contact">
     <div className="container">
        <h1>Connect With <span>Us</span></h1>
        <p>We would love to respond to your queries and help you succeed.<br/>Feel free to get in touch with us.</p>
        <div className="contact-box">
            <div className="contact-left">
                <h3>Send your details</h3>
                <form>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter name"/>
                        </div>
                        <div className="input-group">
                            <label>Phone</label>
                            <input type="text" placeholder="Enter number"/>
                        </div>
                    </div>
                    <div className="input-row">

                        <div className="input-group">
                            <label>E-mail</label>
                            <input type="email" placeholder="Enter mail id"/>
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input type="text" placeholder="Enter  address"/>
                        </div>
                    </div>

                    <label>Message</label>
                    <textarea   cols="45" rows="5" placeholder="Your Message" ></textarea>

                    <button id="btns" type="submit">Send</button>
                </form>
            </div>
            <div className="contact-right">
                <h3>Reach Us</h3>
                <div className="table">
                <table>
                    <tr>
                        <td>Email</td>
                        <td>vijaypmaurya786@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>9811767538</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Badarpur Border, Faridabad</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>121003</td>
                    </tr>
                </table>
                </div>

            </div>
        </div>
    </div>
  </div>;

  </>)
};

export default Contact;
