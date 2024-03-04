import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import {Box} from "@mui/material"
import '../contact/Contact.css';

import Contactimage from "../img/contact-image.jpg";

function Contact(){
    return(
        <div>
        <Navbar/>
        <Box height={70}></Box>
        <div className="contact-main-container">
            <img src={Contactimage} alt=""/>
        </div>

        <div className="main-section-21">
          <div className="section-21-one">
            <h1 className="">Get In Touch</h1>
            <p>Please feel free to contact us if you have any further questions.</p>
          </div>

          <div className="section-21-two">
            <div className="form-container-contact">
                  <div className="form-group-one">
                        <div className="separate-form-field">
                           <div className="form-group-label">
                              <label >First Name<span className="required-star">*</span></label>
                           </div>
                           <div className="form-input-field">
                              <input type="text" placeholder=" Enter first name" />
                           </div>
                           
                       </div>


                       <div className="separate-form-field">
                       <div className="form-group-label">
                        <label >Last Name<span className="required-star">*</span></label>
                     </div>
                     <div className="form-input-field">
                        <input type="text" placeholder=" Enter last name" />
                     </div>
                     
                       </div>

                       <div className="separate-form-field">
                                 <div className="form-group-label">
                                    <label >Email address<span className="required-star">*</span></label>
                                 </div>
                                 <div className="form-input-field">
                                    <input type="email" placeholder=" Enter your email" />
                                 </div>
                     
                       </div>

                       <div className="separate-form-field">
                              <div className="form-group-label">
                                 <label >Phone<span className="required-star">*</span></label>
                              </div>
                              <div className="form-input-field">
                                 <input type="text" placeholder=" Enter phone no" />
                              </div>
                              
                        </div>

                    </div> 
                    <div className="form-group-two">
                     <div className="form-two-top">
                          <div className="form-group-label">
                              <label >Country<span className="required-star">*</span></label>
                           </div>
                           <div className="form-input-field">
                              <select >
                                 <option value="nothing selected">Chose country</option>
                                 <option value="United State">United State</option>
                                 <option value="India">India</option>
                                 <option value="Japan">Japan</option>
                              </select>
                           </div>
                     </div>
                     <div className="form-two-bottom">
                          <div className="form-group-label">
                              <label>Message<span className="required-star">*</span></label>
                           </div>
                           <div className="form-input-field">
                              <textarea className="increase-row" type="text" placeholder=" Type your message" />
                           
                           </div>
                     </div>

                     <div className="sending-message">
                      <button>send message</button>
                     </div>
                          
                    </div>
            </div>
            <div className="contact-container-detail">
               <h1 className="details-header ">humanitarian  Aid</h1>
               <h2 >Contact:
               <span className="contact" > 29 Church Hill London E17 3AB</span></h2>
               <h2>Phone:
               <span className="phone">0300 111 3001</span></h2>
               <span>(calls to 0300 numbers are included in your free land-line/mobile minutes)</span>
               <h2>Email:
               <span className="email">rachidineathoumane@gmail.com</span></h2>

               <span>Registered with the Charity Commission Charity</span>
                 <span> Registration Number: 1189918</span>

            </div>
          </div>
        </div>

        <Footer/>
        
        </div>
    )
}

export default Contact;