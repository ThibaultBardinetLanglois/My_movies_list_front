import './navBar.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [changeNavColor, setChangeNavColor] = useState<boolean>(false);

  const handleSticky = (e: Event) => {
    if (window.scrollY > 100) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  
    return () => {
      window.removeEventListener("scrool", handleSticky);
    }
  }, []);
  
  return (
    <nav className={changeNavColor ? 'nav_black' : ''} >
      <NavLink to={'/browse'}>Home</NavLink>
      <NavLink to={'/series'}>Series</NavLink>
      <NavLink to={'/movies'}>Movies</NavLink>
      <NavLink to={'/my-list'}>My list</NavLink>
    </nav>
  )
}

export default Navbar
