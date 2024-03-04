import React from "react";
import "../admin-dashboad/admin.css";
import { Box } from "@mui/material";
import {Link} from 'react-router-dom'
import Profile from "../img/pc_rachid.png";

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
function ProfilePage() {
  return (
    <div>
      <div className="main-admin-navbar">
        <div className="admin-navbar">
          <div className="dasboad-admin-logo">fhhh</div>
          <div className="welcome-dashboad">uuu</div>
          <div className="dashboad-logout">ug</div>
        </div>

        <div className="main-profile-content">
          <div className="dashboad-profile">
            <center>
              <img src={Profile} alt="" />
              <div className="name-email">
                <h1>Rachidine</h1>
                <p>rmahamoud@gmail.com</p>
                <hr />
              </div>
            </center>

            <div className="links-profile">
              <ul>
              <li>
                  <span className="icon-side-nav"><DashboardIcon/></span>
                  <Link to="/admin">Dashboad</Link>
                </li>
                <li>
                  <span className="icon-side-nav"><HomeIcon/></span>
                  <a href="/profile-page">Edit Profile</a>
                </li>
                <li>
                <span className="icon-side-nav"><ContentCopyIcon/></span>
                <a href="/">File</a>
                </li>
                <li>
                   <span className="icon-side-nav"><ChatBubbleOutlineIcon/></span>
                   <a href="/">Message</a>
                </li>
                <li>
                   <span className="icon-side-nav"><SupervisorAccountIcon/></span>
                   <a href="/">Admin</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="dashboad-content">
             Welcome to profile page
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
