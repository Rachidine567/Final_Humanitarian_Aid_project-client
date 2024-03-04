import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import '../about/About.css'
import Aboutimage from "../img/about-image.jpg";



import Image20 from "../img/gaza-aid.jpg";
 

function About(){
    return (
        <div>
        <Navbar/>
        <Box height={70}></Box>
        <div className="container-about">
            <img src={Aboutimage} alt=""/>
        </div>
        <div className="about-us">
            <h1>About Us</h1>
        </div>

        <div className="section-eleven-main">
            <div className="text-header">
                <h1 className="about-us-one">GROWING, PROVIDING, TOGETHER</h1>
                <h1 className="about-us-two">ABOUT US</h1>
                <p>We work to make immediate and lasting improvements to the lives of people affected 
                    <br/> by poverty, war and disaster and who have no one else to turn to.</p>
            </div>
        </div>

        <div className="section-11-main">

            <div className="section-11">

            <div className="section-11-1">
               <div className=" section-11-child-1">
               <img src={Image20} alt=""/>
               </div>
               <div className=" section-11-child-2">
                <h1>our story</h1>
                <p>“I can’t now think of those times when I had nothing to feed my children. 
                    <br/>Thanks to Islamic Aid, we have now our own goats, chicken and cows. The children are 
                    <br/> very proud that through these animals we have enough milk, eggs and meat. </p>
               </div>
                </div>

            <div className="section-11-2">
                <div className="section1-11-1">
                <img src={Image20} alt=""/>
                </div>
                <div className="section1-11-2">
                    <h1>our story</h1>
                    <p>“I can’t now think of those times when I had nothing to feed my children. 
                    <br/>Thanks to Islamic Aid, we have now our own goats, chicken and cows. The children are 
                    <br/> very proud that through these animals we have enough milk, eggs and meat.</p>
                </div>
            </div>

            </div>

            
            <div className="section-11">

            <div className="section-11-1">
               <div className=" section-11-child-1">
               <img src={Image20} alt=""/>
               </div>
               <div className=" section-11-child-2">
                <h1>our story</h1>
                <p>“I can’t now think of those times when I had nothing to feed my children. 
                    <br/>Thanks to Islamic Aid, we have now our own goats, chicken and cows. The children are 
                    <br/> very proud that through these animals we have enough milk, eggs and meat. </p>
               </div>
                </div>

            <div className="section-11-2">
                <div className="section1-11-1">
                <img src={Image20} alt=""/>
                </div>
                <div className="section1-11-2">
                    <h1>our story</h1>
                    <p>“I can’t now think of those times when I had nothing to feed my children. 
                    <br/>Thanks to Islamic Aid, we have now our own goats, chicken and cows. The children are 
                    <br/> very proud that through these animals we have enough milk, eggs and meat.</p>
                </div>
            </div>

            </div>

            
            <div className="section-11">

            <div className="section-11-1">
               <div className=" section-11-child-1">
               <img src={Image20} alt=""/>
               </div>
               <div className=" section-11-child-2">
                <h1>our story</h1>
                <p>“I can’t now think of those times when I had nothing to feed my children. 
                    <br/>Thanks to Islamic Aid, we have now our own goats, chicken and cows. The children are 
                    <br/> very proud that through these animals we have enough milk, eggs and meat. </p>
               </div>
                </div>

            <div className="section-11-2">
                <div className="section1-11-1">
                <img src={Image20} alt=""/>
                </div>
                <div className="section1-11-2">
                    <h1>our story</h1>
                    <p>“I can’t now think of those times when I had nothing to feed my children. 
                    <br/>Thanks to Islamic Aid, we have now our own goats, chicken and cows. The children are 
                    <br/> very proud that through these animals we have enough milk, eggs and meat.</p>
                </div>
            </div>

            </div>

            

            



            </div>

          <Footer/>
       </div>
    )
}

export default About;