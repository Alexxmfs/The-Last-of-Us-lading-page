import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Logo from "../assets/logo.png";
import iconGitHub from "../assets/icon_github.png"
import iconInsta from "../assets/icon_instagram.png"
import iconLinkedin from "../assets/icon_linkedin.png"

const Navbar = () => {
  const navRef = useRef();

  const showNavbar =  () => {
    navRef.current.classList.toggle("responsive_nav");
  }

    return (
    <header>

      <div className="logo">
          <img src={Logo} />
      </div>

        <nav ref={navRef}>
            <a className="Navbar" href="/#">Home</a>
            <a className="Navbar" href="/#">Personagens</a>
            <a className="Navbar" href="/#">Wallpapers</a>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes />
              </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
        </button>

      <nav className="nav-network">
        <div className="social-icon">
          <a className="icons" href="https://github.com/Alexxmfs" target="_blank"><img src={iconGitHub} /></a>
          <a className="icons" href="https://www.instagram.com/alex.maceedo/" target="_blank"><img src={iconInsta} /></a>
          <a className="icons" href="https://www.linkedin.com/in/alex-macedo-freitas/" target="_blank"><img src={iconLinkedin} /></a>
        </div>
      </nav>
      
    </header>
  );
};

export default Navbar;