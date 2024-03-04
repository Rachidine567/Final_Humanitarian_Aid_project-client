import React from 'react'
import '../homepage/home.css'
import Navbar from '../navbar/navbar';
import Image from '../img/gaza-aid.jpg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Image1 from '../img/charity-donation.jpg';
import Image2 from '../img/FOOD-pack.jpg';
import Image3 from '../img/gaza-aid.jpg';
import Image4 from '../img/give_water.jpg';
import Image5 from '../img/give_zakah.jpeg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../footer/Footer';


function Home() {
  return (
 <div className='body-section'>
 <Navbar/>
 <div className='section-one'>
 <div className="container-home-main-section">
   <img src={Image} alt=''/>

  <div className="text-overlay">
    <h2 className="overlay-text">Emergency</h2>
    <span className='upper'>Build shelters $300</span><br/>
    <span className="small-letter">Help those who are in need During Critical Time</span>
   
  </div>
  <div className="button-container">
      <button className='button1'><span className='btn-text'>Donate</span> < NavigateNextIcon/></button>
      <button className='button2'>Read more <NavigateNextIcon/></button>
      </div>

 </div>
 
 </div>
 <div className='section-two'>
  <h2 className='feature-appeal'>feature appeals<br/>
  <span className='feature-one'>let's help change live for good, together</span></h2>
 </div>

 <div className="section-three">
  <div className="card-1">
    <img src={Image} alt=''/>
    <div className="container-card">
    <h1 className="card-title">RAMADAN APPEAL</h1>
    <span className="card-title1">&nbsp;&nbsp; Donate to our Ramadan appeal 
    and provide food  for those fasting and in need</span>
    </div>
   
    <button className='button1' >Donate</button>
  </div>
  <div className="card-1">
  <img src={Image1} alt=''/>
    <div className="container-card">
    <h1 className="card-title">CHARITIES AID NEEDY</h1>
    <span className="card-title1">&nbsp;&nbsp; Donate and provide food
for those who are in need</span>
    </div>
   
    <button className='button1' >Donate</button>
  </div>

  <div className="card-1">
  <img src={Image2} alt=''/>
    <div className="container-card">
    <h1 className="card-title">GIVE A FOOD PACK</h1>
    <span className="card-title1">&nbsp;&nbsp; $50 provides a family of
       five with one month food supplies 
    </span>
  </div>
  <button className='button1' >Donate</button>
  </div>


  <div className="card-1">
  <img src={Image3} alt=''/>
    <div className="container-card">
    <h1 className="card-title">RAMADAN APPEAL</h1>
    <span className="card-title1">&nbsp;&nbsp; Donate to our Ramadan appeal 
    and provide food  for those fasting and in need</span>
  </div>
  <button className='button1' >Donate</button>
    </div>

  <div className="card-1">

  <img src={Image4} alt=''/>
    <div className="container-card">
    <h1 className="card-title">GIVE WATER, GIVE LIFE</h1>
    <span className="card-title1">&nbsp;&nbsp; Aid providing clean and safe drinking water to 
       those in need </span>
  </div>
  <button className='button1' >Donate</button>
  </div>

  <div className="card-1"> 
   <img src={Image5} alt=''/>
    <div className="container-card">
    <h1 className="card-title">GIVE YOUR ZAKAH</h1>
    <span className="card-title1">&nbsp;&nbsp; Giving your Zakah purifies your wealth and gives to 
    the poor a life free from poverty </span>
  </div>
  <button className='button1' >Donate</button></div>
  </div>

<div className="section-four">
<h2 className='what-we-do'>What we do</h2>
<p className='explain'> General Aid seeks to make immediate and lasting improvements to 
   the lives of people affected by poverty, war and disaster.Our key focus areas are:</p>

</div>

<div className="links">

<div className="links1">
<li><a href="/"> <ChevronRightIcon/>FOOD AND NUTRITION</a></li>
<li><a href="/"><ChevronRightIcon/>SAFE ,CLEAN WATER</a></li>
<li><a href="/"><ChevronRightIcon/>HEALTHCARE</a></li>
<li><a href="/"><ChevronRightIcon/>EMERGENCY RELIEF</a></li>
</div>
<div className="links2">
<li><a href="/"><ChevronRightIcon/>EDUCATION</a></li>
<li><a href="/"><ChevronRightIcon/>CLIMATE CHANGE</a></li>
<li><a href="/"><ChevronRightIcon/>LIVELIHOODS</a></li>
<li><a href="/"><ChevronRightIcon/>THE IMPACT OF OUR WORK</a></li>
</div>
</div>

<div className="last-button">
  <button className='last-button1'>The issue we work on<ChevronRightIcon/></button>
</div>

<Footer/>

 </div>
  )
}
export default Home;