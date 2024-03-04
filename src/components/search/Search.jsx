import React, {useState} from "react";
import '../search/search.css'
import Navbar from "../navbar/navbar";
import SearchIcon from '@mui/icons-material/Search';


function  Search(){

    const handleClick = () => {
        // handle click event for the search icon
        console.log('Search icon clicked!');
       }

    const [searching, setSearching] = useState(false);

    const toggleSearching = () => {
        setSearching(!searching);
    };

    return(
        <div>
            <Navbar/>


         <nav className="navbar">
            <div className="navbar-search">
                <input 
                type="text"
                placeholder="Search..."
                onFocus={toggleSearching}
                onBlur={toggleSearching}
                />


            </div>
            <div className="icon-container" onClick={handleClick}></div>
            <div className="icon-container">
                 <SearchIcon/>
         </div>

        </nav>

        </div>
       
    );
}
export default Search;
