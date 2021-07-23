import React, { useState } from 'react';
import styles from './navbar.module.css';
import { ImLinkedin2, ImGithub, ImTwitter } from 'react-icons/im';
import { GoGrabber, GoX } from 'react-icons/go';
import { FaMediumM } from 'react-icons/fa';
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className={`section ${styles.nav}`}>
      <img src='/svlogo.png' alt='logo' className={styles.logo} />
      <span
        className={`${styles.toggle} ${styles.icons}`}
        onTouchEnd={handleClick}
      >
        {toggle ? <GoX /> : <GoGrabber />}
      </span>
      <ul className={toggle ? `${styles.menu} ${styles.active}` : styles.menu}>
        <li
          className={`${styles.menu_icons} ${styles.icons}`}
          onClick={handleClick}
        >
          {' '}
          <a target='_blank' href='https://www.linkedin.com/in/elisvcodes/'>
            <ImLinkedin2 />
          </a>
        </li>
        <li
          className={`${styles.menu_icons} ${styles.icons}`}
          onClick={handleClick}
        >
          {' '}
          <a target='_blank' href='https://github.com/elisvcodes'>
            <ImGithub />
          </a>
        </li>
        <li
          className={`${styles.menu_icons} ${styles.icons}`}
          onClick={handleClick}
        >
          {' '}
          <a target='_blank' href='https://twitter.com/elisvcodes'>
            <ImTwitter />
          </a>
        </li>
        <li
          className={`${styles.menu_icons} ${styles.icons}`}
          onClick={handleClick}
        >
          {' '}
          <a target='_blank' href='https://sultanoveli.medium.com/'>
            <FaMediumM />
          </a>
        </li>
      </ul>
    </div>
  );
}
