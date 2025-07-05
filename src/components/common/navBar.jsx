import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "./logo"; // Import Logo
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const NavLinks = () => (
		<ul className="nav-list">
			<li className={active === "home" ? "nav-item active" : "nav-item"}>
				<Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
			</li>
			<li className={active === "about" ? "nav-item active" : "nav-item"}>
				<Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
			</li>
			<li className={active === "projects" ? "nav-item active" : "nav-item"}>
				<Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
			</li>
			<li className={active === "articles" ? "nav-item active" : "nav-item"}>
				<Link to="/articles" onClick={() => setIsMenuOpen(false)}>Articles</Link>
			</li>
			<li className={active === "certificates" ? "nav-item active" : "nav-item"}>
				<Link to="/certificates" onClick={() => setIsMenuOpen(false)}>Certificates</Link>
			</li>
			<li className={active === "contact" ? "nav-item active" : "nav-item"}>
				<Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
			</li>
		</ul>
	);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					{/* Desktop Navbar */}
					<div className="nav-background">
						<NavLinks />
					</div>

					{/* Mobile Menu Button */}
					<div className="nav-mobile-menu-button" onClick={toggleMenu}>
						<FontAwesomeIcon icon={faBars} />
					</div>
				</nav>
			</div>

			{/* Mobile Menu Overlay */}
			<div className={`nav-mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
				<div className="nav-mobile-menu-header">
					<div className="nav-mobile-logo">
						<Logo width={50} />
					</div>
					<div
						className="nav-mobile-close-button"
						onClick={toggleMenu}
					>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="nav-mobile-links-container">
					<NavLinks />
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;