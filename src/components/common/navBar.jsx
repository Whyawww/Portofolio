import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import Logo from "./logo";
import "./styles/navBar.css";

const LANGUAGES = [
	{ 
		code: 'id', 
		label: 'ID', 
		flag: <img src="https://flagcdn.com/w20/id.png" alt="Indonesia" style={{ width: '18px', borderRadius: '2px', display: 'block' }} />, 
		colorClass: 'lang-id', 
		name: 'Indonesia' 
	},
	{ 
		code: 'en', 
		label: 'EN', 
		flag: <img src="https://flagcdn.com/w20/gb.png" alt="English" style={{ width: '18px', borderRadius: '2px', display: 'block' }} />, 
		colorClass: 'lang-en', 
		name: 'English'   
	},
	{ 
		code: 'sd', 
		label: 'SD', 
		flag: null,
		colorClass: 'lang-sd', 
		name: 'Sunda'     
	},
];
const normalizeLang = (code) => (code || '').split('-')[0].toLowerCase();

const NavBar = (props) => {
	const { active } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropOpen, setIsDropOpen] = useState(false);
	const [isFlipping, setIsFlipping] = useState(false);
	const dropRef       = useRef(null);
	const mobileDropRef = useRef(null);
	const { t, i18n } = useTranslation();

	const currentCode = normalizeLang(i18n.language);
	const currentLang = LANGUAGES.find(l => l.code === currentCode) || LANGUAGES[0];

	useEffect(() => {
		const handler = (e) => {
			const outsideDesktop = dropRef.current && !dropRef.current.contains(e.target);
			const outsideMobile  = mobileDropRef.current && !mobileDropRef.current.contains(e.target);
			if (outsideDesktop && outsideMobile) setIsDropOpen(false);
		};
		document.addEventListener('mousedown', handler);
		return () => document.removeEventListener('mousedown', handler);
	}, []);

	const selectLanguage = (code) => {
		if (isFlipping || currentCode === code) return; 
		
		setIsFlipping(true);

		setTimeout(() => {
			i18n.changeLanguage(code);
		}, 250);

		setTimeout(() => setIsFlipping(false), 550);
		setIsDropOpen(false);
	};

	const toggleMenu = () => setIsMenuOpen(prev => !prev);

	const LangTrigger = ({ mobile = false }) => (
		<div
			className={`lang-trigger ${mobile ? 'lang-trigger-mobile' : ''} ${isFlipping ? 'flipping' : ''}`}
			onClick={(e) => {
				e.stopPropagation();
				setIsDropOpen(!isDropOpen);
			}}
			title="Pilih Bahasa / Choose Language"
		>
			<span className="lang-flag">{currentLang.flag}</span>
			<span className={`lang-code ${currentLang.colorClass}`}>{currentLang.label}</span>
			<FontAwesomeIcon
				icon={faChevronDown}
				className={`lang-chevron ${isDropOpen ? 'open' : ''}`}
			/>
		</div>
	);

	const LangDropdown = ({ mobile = false }) => (
		<div className={`lang-dropdown ${isDropOpen ? 'open' : ''} ${mobile ? 'lang-dropdown-mobile' : ''}`}>
			{LANGUAGES.map((lang, i) => (
				<div
					key={lang.code}
					className={`lang-option ${lang.code === currentCode ? 'active' : ''}`}
					style={{ animationDelay: isDropOpen ? `${i * 50}ms` : '0ms' }}
					onMouseDown={(e) => {
						e.preventDefault();
						selectLanguage(lang.code);
					}}
					onClick={() => selectLanguage(lang.code)}
				>
					<span className="lang-option-flag">{lang.flag}</span>
					<span className={`lang-option-code ${lang.colorClass}`}>{lang.label}</span>
					<span className="lang-option-name">{lang.name}</span>
					{lang.code === currentCode && (
						<span className="lang-option-check">✓</span>
					)}
				</div>
			))}
		</div>
	);

	const LangToggleDesktop = () => (
		<li className="nav-item lang-toggle-wrapper" ref={dropRef}>
			<LangTrigger/>
			<LangDropdown />
		</li>
	);

	const MobileLangToggle = () => (
		<div className="lang-toggle-mobile-float" ref={mobileDropRef}>
			<LangTrigger mobile />
			<LangDropdown mobile />
		</div>
	);

	const NavLinks = () => (
		<ul className="nav-list">
			<li className={active === "home"         ? "nav-item active" : "nav-item"}>
				<Link to="/"             onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
			</li>
			<li className={active === "about"        ? "nav-item active" : "nav-item"}>
				<Link to="/about"        onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
			</li>
			<li className={active === "projects"     ? "nav-item active" : "nav-item"}>
				<Link to="/projects"     onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
			</li>
			<li className={active === "articles"     ? "nav-item active" : "nav-item"}>
				<Link to="/articles"     onClick={() => setIsMenuOpen(false)}>{t('nav.articles')}</Link>
			</li>
			<li className={active === "certificates" ? "nav-item active" : "nav-item"}>
				<Link to="/certificates" onClick={() => setIsMenuOpen(false)}>{t('nav.certificates')}</Link>
			</li>
			<li className={active === "contact"      ? "nav-item active" : "nav-item"}>
				<Link to="/contact"      onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
			</li>
			<LangToggleDesktop />
		</ul>
	);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<NavLinks />
					</div>
					<div className="nav-mobile-menu-button" onClick={toggleMenu}>
						<FontAwesomeIcon icon={faBars} />
					</div>
				</nav>
			</div>

			<MobileLangToggle />

			<div className={`nav-mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
				<div className="nav-mobile-menu-header">
					<div className="nav-mobile-logo">
						<Logo width={50} />
					</div>
					<div className="nav-mobile-close-button" onClick={toggleMenu}>
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