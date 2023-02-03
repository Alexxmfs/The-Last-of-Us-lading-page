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
        {/* <h3>Logo</h3> */}
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
          <a className="icons"><img src={iconGitHub} /></a>
          <a className="icons"><img src={iconInsta} /></a>
          <a className="icons"><img src={iconLinkedin} /></a>
      </nav>
    </header>
  );
};

export default Navbar;