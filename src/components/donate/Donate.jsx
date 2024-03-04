import React from "react";
// import Navbar from "./navbar";
// import Footer from "./Footer";
// import { Box } from "@mui/material";
import Logo from "../img/logo-main.png";

import "../donate/Donate.css";
import Imagedonate from "../img/give_zakah.jpeg";

import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import linkedin from '../img/linkedin.png';
import {Link} from 'react-router-dom';
import signature from '../img/signature.PNG'


function Donate() {
  return (
    <div className="body-back">
      <nav class="Nav-section-donate">
    <img src={Logo} alt="" />
    <p>Need help? Call on (UK) <a href="/">03001113001</a></p>
  </nav>

  <div class="form-section-main">
    <div class="container-img">
      <img src={Imagedonate} alt="" />
      <h1>
        <span class="img-yes">Yes!</span><br />
        You're on your<br />
        way to saving<br />
        a life.
      </h1>
    </div>
    <div class="container-img-bt-text">
      <h3>100% Donations Promise</h3>
      <h4>
        100% of your donation helps provide the poor with food, clean water,
        healthcare, education and livelihoods.
      </h4>
    </div>

    <div class="container-from-containt">
      <h2>I Wish To Give</h2>
      <div class="check-box-one">
        <div class="check-box-form">
          <input type="checkbox" name="" id="" />
          <label for="">One-Off</label>
        </div>
        <div class="check-box-form">
          <input type="checkbox" name="" id="" />
          <label for="">Every day</label>
        </div>
        <div class="check-box-form">
          <input type="checkbox" name="" id="" />
          <label for="">Every week</label>
        </div>
        <div class="check-box-form">
          <input type="checkbox" name="" id="" />
          <label for="">Every month</label>
        </div>
      </div>
    </div>

    <div class="container-from-containt">
      <h2 className="text-header">Payment Method</h2>
      <div class="check-box-two">
        <div class="check-box-form">
          <input type="checkbox" name="" id="" />
          <label for="">Card</label>
        </div>
        <div class="check-box-form">
          <input type="checkbox" name="" id="" />
          <label for="">Pay Pal</label>
        </div>
      </div>
    </div>

    <div class="container-from-containt">
      <h2 className="text-header">Donation Details</h2>
      <div class="form-setion-container">
        <div class="left-side-form">
          <div class="section-one-left">
            <select class="selector-menu" name="" id="">
              <option value="$">$</option>
              <option value=""></option>
              <option value="$">$</option>
            </select>
            <div class="input-container">
              <input class="up-style-input" type="text" id="inputField" required />
              <label class="up-style-label" for="inputField">Placeholder</label>
            </div>
          </div>

          <div class="section-two-left">
            <label for="">Spend in Country</label><br /><br />
            <select class="selector-menu2" name="" id="">
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
            </select>
          </div>

          <div class="input-container">
            <input class="up-style-input2" type="text" id="inputField" required />
            <label class="up-style-label" for="inputField">Placeholder</label>
          </div>
        </div>



        <div class="right-side-form">
          <div class="section-two-left">
            <label for="">Spend in Country</label><br /><br />
            <select class="selector-menu2" name="" id="">
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
            </select>
          </div>
          <div class="section-two-left">
            <label for="">Spend in Country</label><br /><br />
            <select class="selector-menu2" name="" id="">
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="display-overview">
      <p>
        <span class="plus-icon">+</span>
        <a href="/">Click to add one more donation</a>
      </p>
      <p>
        Total Amount: <span><b>£500.00</b></span>
      </p>
    </div>

    <div class="section-three">
      <div class="section-two-left">
        <h1>Your Detail</h1>
        <select class="selector-menu" name="" id="">
          <option value="$">$</option>
          <option value=""></option>
          <option value="$">$</option>
        </select>
        <br />
        <div class="section-input-form">
          <div class="input-container">
            <input class="up-style-input" type="text" id="inputField" required />
            <label class="up-style-label" for="inputField">Placeholder</label>
          </div>
          <div class="input-container">
            <input class="up-style-input" type="text" id="inputField" required />
            <label class="up-style-label" for="inputField">Placeholder</label>
          </div>
        </div>
        <div class="section-input-form">
          <div class="input-container">
            <input class="up-style-input" type="text" id="inputField" required />
            <label class="up-style-label" for="inputField">Placeholder</label>
          </div>
          <div class="input-container">
            <input class="up-style-input" type="text" id="inputField" required />
            <label class="up-style-label" for="inputField">Placeholder</label>
          </div>
        </div>
      </div>
    </div>

    <div class="address-field">
      <h1 className="text-header">Your Address</h1>
      <div class="section-one-left">
        <select class="selector-menu3" name="" id="">
          <option value="$">$</option>
          <option value=""></option>
          <option value="$">$</option>
        </select>
        <div class="input-container">
          <input class="up-style-input3" type="text" id="inputField" required />
          <label class="up-style-label" for="inputField">Placeholder</label>
          <button type="submit">Find my address</button>
        </div>
      </div>

      <h2>Your Tick Can Help Save Lives</h2>
      <p>New privacy regulations present a major
        challenge for Islamic Aid. If you don't
        choose to hear from us, we wouldn't be able
        to help save lives together. </p>

      <div class="check-box-list">
        <p>I am happy to hear from Islamic Aid by:</p>
        <input type="checkbox" name="`" id="" />Email &nbsp;&nbsp;&nbsp;
        <input type="checkbox" name="`" id="" />Sms&nbsp;&nbsp;&nbsp;
        <input type="checkbox" name="`" id="" />Phone <br />
        <p>To opt-out, email to: mail@islamicaid.com</p>
      </div>
    </div>
    <div class="section-form-four">
      <div class="img-left-sd">
        <img src={signature} alt="" />
      </div>
      <div class="right-side-cnt">
        <h2>
          Make your <span>£0.00</span> worth <span>£0.00</span> at no extra cost.
          </h2>
          <div class="setion-mini-selecter">
            <select class="selector-menu4" name="" id="">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <p class="paragraph-right">I am a UK taxpayer.
              I want Islamic Aid to claim Gift <br />Aid on
              all my donations. Read more</p>

          </div>
      </div>
    </div>

  </div>
  <div class="footer-section">
    <div class="footer-section-cont">
      <div class="section-top-foot">
        <div class="sect-one">
          <p>changing lives for good</p>
        </div>
        <div class="sect-two">
          <p>Charity Registration Number: 1189918<br />
            3 Woodside Park Avenue<br />
            London E17 3NP<br />
            Phone: 0300 111 3001<br />
            mail@islamicaid.com</p>
        </div>
        <div class="sect-three">
          <img src={signature} alt=""/>
        </div>

      </div>
      <div class="section-bottom-foot">
        <div class="privacy-section">
          <span><a href="">Sitemap |</a></span>
          <span><a href="">Terms and Conditions |</a></span>
          <span><a href=""> Privacy Policy |</a></span>
          <span><a href=""> Cookies Policy</a></span>
        </div>
        <div class="social-icon-sect">
          <img src={facebook} alt="F" />
          <img src={twitter} alt="T" />
          <img src={linkedin} alt="I" />
          <img src={youtube} alt="L" />
        </div>
      </div>
    </div>
  </div>

</div>

  );
}
export default Donate;
