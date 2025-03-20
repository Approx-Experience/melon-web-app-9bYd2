import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import CartIcon from "../Icons/CartIcon";
import HeartIcon from "../Icons/HeartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import Link from "../Link/Link";
import MelonLogo from "../MelonLogo/MelonLogo";
import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <section className="dark-mode-toggle">
        <DarkModeToggle />
      </section>
      <div className="middle-nav">
        <MelonLogo />
        <section>
          <SearchBar placeholder="Find your next fit" icon="🔍" />
          <Link to="" text="account" icon={<ProfileIcon />} />
          <Link to="" text="favorite" icon={<HeartIcon />} />
          <Link to="" icon={<CartIcon />} /> 0
          <div id="hamburger-menu" onClick={toggleMenu}>
            ☰
          </div>
        </section>
      </div>
      <nav className={menuOpen ? "nav-open" : ""}>
        <Link to="" text="new arrivals" />
        <Link to="" text="men" />
        <Link to="" text="women" />
        <Link to="" text="accessories" />
        <Link to="" text="shoes" />
        <Link to="" text="sale" />
      </nav>
    </div>
  );
};

export default Navbar;