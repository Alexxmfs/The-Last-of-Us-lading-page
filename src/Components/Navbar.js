import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Logo from "../assets/logo.png";

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
            <a href="/#">Home</a>
            <a href="/#">Personagens</a>
            <a href="/#">Wallpapers</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
    </header>
  );
};

export default Navbar;