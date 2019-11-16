import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/badger128.png'
// import { AiOutlineHome } from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'
// import { AiOutlineSetting } from 'react-icons/ai'
// import { AiOutlineProject } from 'react-icons/ai'
// import { AiOutlineMail } from 'react-icons/ai'
// import { AiOutlineTwitter } from 'react-icons/ai'
// import { AiFillLinkedin } from 'react-icons/ai'
// import { AiOutlineGithub } from 'react-icons/ai'

const Navbar = () => {

  return (
    <header id={styles.header}>
      <div id={styles.headerGroup}>
        <div className={styles.headerGroupLeft}>
          <Link>
            <img src={logo} alt="badger" className={styles.logo}/>
          </Link>
          <div className={styles.logoName}>
            <h1>James Kemp</h1>
            <h2>Full-Stack Developer</h2>
          </div>
        </div>
        <div className={styles.headerGroupRight}>
          <nav>
            <ul className={styles.navbar}>
              <li><NavLink to="/About">About</NavLink></li>
              <li><NavLink exact to="/">Portfolio</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
