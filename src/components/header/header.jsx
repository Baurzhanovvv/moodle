import React, { useState } from 'react';
import './header.css';
import img from './chel.svg';

export default function Header() {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <div className='header'>
      <div className="container">
        <div className="header-chart">
          <div className="header-inner">
            <a href="#!" className="logo">LOGO</a>
            <a href="#!" className="nav__link1"></a>
            <nav className="navbar">
              <div className="nav__link" onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
                MENU
                {isDropdownOpen1 && (
                  <div className="dropdown-menu">
                    <a href="#!">Item 1</a>
                    <a href="#!">Item 2</a>
                    <a href="#!">Item 3</a>
                  </div>
                )}
              </div>
              <a href="#!" className="nav__link" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
                MENU
                {isDropdownOpen2 && (
                  <div className="dropdown-menu">
                    <a href="#!">Item 1</a>
                    <a href="#!">Item 2</a>
                    <a href="#!">Item 3</a>
                  </div>
                )}
              </a>
              <a href="#!" id='line-1' className="nav__link">CLUBS</a>
            </nav>
          </div>
          <div className="header-inner2">
            <nav className='navbar2'>
              <a id='line-2' href="#!" className='nav__link2'>LOGIN | REGISTER</a>
              <a href="./" className='nav__link2'><img src={img} alt="" /></a>
            </nav>
          </div>
        </div>
      </div>
    </div >
  );
}