import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/badger128.png'

const Navbar = () => {
  return (
    <header id={styles.header}>
      <div id={styles.headerGroup}>
        <div id={styles.logoGroup}>
          <Link>
            <img src={logo} alt="badger" className={styles.logo}/>
          </Link>
          <div className={styles.logoName}>
            <h1>James Kemp</h1>
            <h2>Full-Stack Developer</h2>
          </div>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink exact to="/">Portfolio</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
