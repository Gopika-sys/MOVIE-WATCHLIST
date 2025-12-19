import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Header = () => {
  //let [show, setShow] = useState(false);
  
  return (
    <header className='header'>
      <NavLink to={"/"}>
      {" "}
      <img 
        src="https://tse4.mm.bing.net/th/id/OIP.76qYes37ucOrc5t3g3jPsQHaHa?pid=Api&P=0&h=180"
        alt="logo"
      ></img>
      </NavLink>

      <div className='links'>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
        <NavLink to="/genres">Genres</NavLink>
        <NavLink to="/about">About</NavLink>
        {/*<NavLink to="/addMovie">MovieForm</NavLink>*/}
        <NavLink to="/contact">Contact</NavLink>
        </div>
    </header>
  );
};

export default Header;