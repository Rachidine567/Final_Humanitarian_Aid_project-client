import React from "react";
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import { Box } from "@mui/material";
import Image7 from "../img/current-image.jpg";
import '../current-appeal/Current-Appeal.css';

import  Cardimage1 from '../img/give_water.jpg'
import  Cardimage2 from '../img/give_water.jpg'
import  Cardimage3 from '../img/give_water.jpg'
import  Cardimage4 from '../img/give_water.jpg'
import  Cardimage5 from '../img/give_water.jpg'
import  Cardimage6 from '../img/give_water.jpg'



function CurrentAppeal(){
   return(
    <div>
        <Navbar/>
        <Box height={70} ></Box>
        <div className="section-six">
        <div className="main-container-current-page">
            <img className='img-bg' src={Image7} alt= ""/>
        </div>
   <div className="current-appeal">
       <h1>Current Appeals</h1>

   </div>

   <div className="section-seven">
    <h1 className="section-seven-1">Growing ,providing ,together</h1>
    <h1 className="section-seven-2">current Appeals</h1>
  <p>Humanitarian Aid seek to make immediate and lasting  improvements to the <br/> lives of the people affected by poverty, war and disaster</p>
  </div>


        </div>


        {/* gight section */}
                <div className="main-containt-eight">

                    {/* Card-one */}
                    <div className="section-one-profile">
                    <div className="all-section-left1"> 
                        <div className="all-section-left">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf ,hwekrfewio dfhsdiuhfkuds sdjfidsh<br/>jefgshfjhsfsdhfgdshf sdngfdsfhjdsj</p>
                            </div>
                        </div>
                        </div>

                        <div className="all-section-right1">
                            <div className="all-section-right">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf<br/>jefgshfjhsfsdhfgdshf</p>
                            </div>
                            </div>
                        </div>
                </div>


                {/* end of card-one */}


                <div className="section-one-profile">
                    <div className="all-section-left1"> 
                        <div className="all-section-left">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf ,hwekrfewio dfhsdiuhfkuds sdjfidsh<br/>jefgshfjhsfsdhfgdshf sdngfdsfhjdsj</p>
                            </div>
                        </div>
                        </div>

                        <div className="all-section-right1">
                            <div className="all-section-right">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf<br/>jefgshfjhsfsdhfgdshf</p>
                            </div>
                            </div>
                        </div>
                </div>



                

                <div className="section-one-profile">
                    <div className="all-section-left1"> 
                        <div className="all-section-left">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf ,hwekrfewio dfhsdiuhfkuds sdjfidsh<br/>jefgshfjhsfsdhfgdshf sdngfdsfhjdsj</p>
                            </div>
                        </div>
                        </div>

                        <div className="all-section-right1">
                            <div className="all-section-right">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf<br/>jefgshfjhsfsdhfgdshf</p>
                            </div>
                            </div>
                        </div>
                </div>




                <div className="section-one-profile">
                    <div className="all-section-left1"> 
                        <div className="all-section-left">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf ,hwekrfewio dfhsdiuhfkuds sdjfidsh<br/>jefgshfjhsfsdhfgdshf sdngfdsfhjdsj</p>
                            </div>
                        </div>
                        </div>

                        <div className="all-section-right1">
                            <div className="all-section-right">
                            <div className="section-profile-left">
                                <img src={Cardimage1} alt=""/>
                            </div>
                            <div className="section-profile-right">
                                <h1>dvgjsdgfjdshgk</h1>
                                <p>sdhgfhdshsdgf<br/>jefgshfjhsfsdhfgdshf</p>
                            </div>
                            </div>
                        </div>
                </div>
     </div>
       


        <Footer/>
    </div>
   )
}
export default CurrentAppeal;