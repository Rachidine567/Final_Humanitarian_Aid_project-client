import React from "react";
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import { Box } from "@mui/material";
import Imageproject from '../img/image-project.jpg';
import Imageone from '../img/current_app-image.jpg';
import Imagetwo from '../img/gaza-aid.jpg';
import Imagethree from '../img/give_water.jpg'
import '../project/Project.css'


function Project(){
   return(
    <div>
        <Navbar/>
        <Box height={70} ></Box>

 <div class="container">
  <img src={Imageproject} alt="Snow"/>
  <div class="top-left">
    <h1>OUR WORK</h1>
    </div>
    <div className="header-one">
        <h1 className="title-one">GROWING, PROVIDING, TOGETHER</h1>
        <h1 className="title-two">CHANGING LIVES FOR GOOD</h1>

        <p>Islamic Aid seeks to make immediate and lasting improvements
            <br/> to the lives of people affected by poverty, war and disaster.</p>
    </div>

    <div className="section-ten-main-container">

    <div className="section-ten">

        
        <div className="section-ten-c1">
          <div className="c1-child1">
            <img src={Imageone} alt=""/>
          </div>
          <div className="c1-child2">
            <h1>welcome here</h1>
            <p>this is my page overview</p>
          </div>
        </div>
        
        <div className="section-ten-c2">
           <div className="c2-child1">
           <img src={Imageone} alt=""/>
           </div>
           <div className="c2-child2">
           <h1>welcome here</h1>
            <p>this is my page overview</p>
           </div>
         </div>
        

     
    </div>

    <div className="section-ten">

        
        <div className="section-ten-c1">
          <div className="c1-child1">
            <img src={Imagethree } alt=""/>
          </div>
          <div className="c1-child2">
            <h1>welcome here</h1>
            <p>this is my page overview</p>
          </div>
        </div>
        
        <div className="section-ten-c2">
           <div className="c2-child1">
           <img src={Imagetwo} alt=""/>
           </div>
           <div className="c2-child2">
           <h1>welcome here</h1>
            <p>this is my page overview</p>
           </div>
         </div>
        

     
    </div>

    <div className="section-ten">

        
<div className="section-ten-c1">
  <div className="c1-child1">
    <img src={Imageone} alt=""/>
  </div>
  <div className="c1-child2">
    <h1>welcome here</h1>
    <p>this is my page overview</p>
  </div>
</div>

<div className="section-ten-c2">
   <div className="c2-child1">
   <img src={Imageone} alt=""/>
   </div>
   <div className="c2-child2">
   <h1>welcome here</h1>
    <p>this is my page overview</p>
   </div>
 </div>



</div>


    </div>

    

    
 

</div>


       
        


        <Footer/>
    </div>
   )
}
export default Project;