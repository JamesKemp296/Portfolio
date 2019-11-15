import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'
import { AiOutlineProject } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
     <div className={styles.logo}>J</div>
     <nav>
        <ul className={styles.navbarLinks}>
          <li><NavLink exact to="/"><AiOutlineHome /></NavLink></li>
          <li><NavLink to="/About"><AiOutlineUser /></NavLink></li>
          <li><NavLink to="/skills"><AiOutlineSetting /></NavLink></li>
          <li><NavLink to="/portfolio"><AiOutlineProject /></NavLink></li>
          <li><NavLink to="/contact"><AiOutlineMail /></NavLink></li>
        </ul>
      </nav>
      <ul className={styles.socialLinks}>
        <li><AiOutlineTwitter /></li>
        <li><AiFillLinkedin /></li>
        <li><AiOutlineGithub /></li>
      </ul>
    </div>
  )
}

export default Navbar