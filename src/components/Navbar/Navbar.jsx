import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={`${styles.title} text-blue-400 hover:text-white transition-colors duration-300`} href="/">
        Yang Wang
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#about"
              className="relative inline-block
             text-blue-400 hover:text-white
             transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-blue-400
             after:transition-all after:duration-300
             hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="relative inline-block
             text-blue-400 hover:text-white
             transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-blue-400
             after:transition-all after:duration-300
             hover:after:w-full"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative inline-block
             text-blue-400 hover:text-white
             transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-blue-400
             after:transition-all after:duration-300
             hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative inline-block
             text-blue-400 hover:text-white
             transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-blue-400
             after:transition-all after:duration-300
             hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
