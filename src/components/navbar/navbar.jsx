import React, { useState } from 'react';
import '../navbar/navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../img/logo-main.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="body-section">
      <nav className="main-container">
        <div className="left-side-container">
          <span className='logo-name'><Link to="/"><img src={Logo} alt='' /></Link></span>
        </div>
        <div className="center-side-container">
          <li><Link to="/current-appeal">CURRENT APPEAL</Link></li>
          <li><Link to="/project">PROJECT</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </div>

        <div className="right-side-container">
          <Link className="button-donate" to="/donate">DONATE</Link>
        </div>
        <div className="icon-container" onClick={toggleSearch}>
          <SearchIcon />
        </div>


        <br/>
        {isSearchOpen && (
          <div className="search-input-container">
            <input type="text" placeholder="Search..." />
            <button  className="search-btn-icon"><SearchIcon /></button>
          </div>
        )}
      </nav>
      
 
        
    </div>
  );
}
export default Navbar;
