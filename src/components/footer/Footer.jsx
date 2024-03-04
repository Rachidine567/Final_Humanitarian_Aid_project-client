import React from 'react'
import Logo from '../img/main-logo.png'
import '../footer/Footer.css'
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import linkedin from '../img/linkedin.png';




function Footer() {
  return (
    <div className="last-section">
        <img src={Logo} alt=''/>
<div className="social-media">
    <img src={facebook} alt='icon'/>
    <img src={instagram} alt='icon'/>
    <img src={twitter} alt='icon'/>
    <img src={youtube} alt='icon'/>
    <img src={linkedin} alt='icon'/>
</div>


<div className="last-links">
  <li><a href="/">Our story</a></li>
  <li><a href="/">Project</a></li>
  <li><a href="/">Why support us</a></li>
  <li><a href="/">Contact Us</a></li>
  <li><a href="/">Donate</a></li>
</div>
<div className="para">
<span className='para1'>hfkjerhgkjrhgtkjrektjgkerhtkj <br/>dsgfjetfuieyfio,<br/>nhergfiuerygiuo</span>
<span className='policy'>
<li><a href="/">Terms & Conditions &nbsp;&nbsp;&nbsp;&nbsp;| </a></li>
  <li><a href="/"> Privacy Policy </a></li>
  <li><a href="/">| &nbsp;&nbsp;&nbsp;&nbsp; Cookies Policy</a></li>
</span>
</div>

</div>
  )
}
export default Footer;