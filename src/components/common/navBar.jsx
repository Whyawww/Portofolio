import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import Logo from "./logo";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isFlipping, setIsFlipping] = useState(false);
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		if (isFlipping) return;
		setIsFlipping(true);
		setTimeout(() => {
			const newLang = i18n.language === 'id' ? 'en' : 'id';
			i18n.changeLanguage(newLang);
		}, 250);
		setTimeout(() => setIsFlipping(false), 550);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isID = i18n.language === 'id';

	/* Toggle untuk desktop */
	const LangToggle = () => (
		<li className="nav-item lang-toggle-wrapper">
			<div
				className="lang-toggle-perspective"
				onClick={toggleLanguage}
				title={isID ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
			>
				<div className={`lang-toggle-inner ${isFlipping ? 'flipping' : ''}`}>
					<span className="lang-flag">{isID ? '🇮🇩' : '🇬🇧'}</span>
					<span className="lang-divider-line"></span>
					<span className={`lang-code ${isID ? 'lang-id' : 'lang-en'}`}>
						{isID ? 'ID' : 'EN'}
					</span>
				</div>
			</div>
		</li>
	);

	/* Floating toggle untuk mobile */
	const MobileLangToggle = () => (
		<div
			className="lang-toggle-mobile-float"
			onClick={toggleLanguage}
			title={isID ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
		>
			<div className={`lang-toggle-inner ${isFlipping ? 'flipping' : ''}`}>
				<span className="lang-flag">{isID ? '🇮🇩' : '🇬🇧'}</span>
				<span className="lang-divider-line"></span>
				<span className={`lang-code ${isID ? 'lang-id' : 'lang-en'}`}>
					{isID ? 'ID' : 'EN'}
				</span>
			</div>
		</div>
	);

	const NavLinks = () => (
		<ul className="nav-list">
			<li className={active === "home" ? "nav-item active" : "nav-item"}>
				<Link to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
			</li>
			<li className={active === "about" ? "nav-item active" : "nav-item"}>
				<Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
			</li>
			<li className={active === "projects" ? "nav-item active" : "nav-item"}>
				<Link to="/projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
			</li>
			<li className={active === "articles" ? "nav-item active" : "nav-item"}>
				<Link to="/articles" onClick={() => setIsMenuOpen(false)}>{t('nav.articles')}</Link>
			</li>
			<li className={active === "certificates" ? "nav-item active" : "nav-item"}>
				<Link to="/certificates" onClick={() => setIsMenuOpen(false)}>{t('nav.certificates')}</Link>
			</li>
			<li className={active === "contact" ? "nav-item active" : "nav-item"}>
				<Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
			</li>
			<LangToggle />
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

					<div className="nav-mobile-menu-button" onClick={toggleMenu}>
						<FontAwesomeIcon icon={faBars} />
					</div>
				</nav>
			</div>

			<MobileLangToggle />

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