import React from 'react';
import './header.css';
import img from './chel.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="header-chart">
          <div className="header-inner">
            <div className="logo">LOGO</div>
            <a href="#!" className="nav__link1"></a>
            <nav className="navbar">
              <a href="#!" className="nav__link">MENU</a>
              <a href="#!" className="nav__link">MENU</a>
              <a href="#!" className="nav__link">CLUBS</a>
            </nav>
          </div>
          <div className="header-inner2">
            <nav className='navbar2'>
              <a id='line' href="#!" className='nav__link2'>LOGIN | REGISTER</a>
              <a href="#!" className='nav__link2'><img src={img} alt="" /></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
