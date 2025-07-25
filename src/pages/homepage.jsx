import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";

import AnimatedPage from "../components/common/AnimatedPages"; // Path telah diperbaiki
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

// Terapkan Lazy Loading di sini
const Skills = React.lazy(() => import("../components/homepage/skills"));
const AllProjects = React.lazy(() => import("../components/projects/allProjects"));
const Works = React.lazy(() => import("../components/homepage/works"));
const Article = React.lazy(() => import("../components/homepage/article"));


const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid var(--border-primary)" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<AnimatedPage>
			<React.Fragment>
				<Helmet>
					<title>{INFO.main.title}</title>
					<meta name="description" content={currentSEO.description} />
					<meta
						name="keywords"
						content={currentSEO.keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar active="home" />
					<div className="content-wrapper">
						<div className="homepage-logo-container">
							<div style={logoStyle}>
								<Logo width={logoSize} link={false} />
							</div>
						</div>

						<div className="homepage-container">
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="title homepage-title">
										{INFO.homepage.title}
									</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>
								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="homepage.jpg"
												alt="about"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="homepage-socials">
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.medium}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMedium}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
							</div>
							
							<div className="homepage-cta">
								<a
									href={INFO.main.cv}
									download="CV-WahyuAjiNusantara.pdf"
									className="cta-button"
								>
									<FontAwesomeIcon icon={faDownload} />
									&nbsp; Download Resume
								</a>
							</div>

							<Suspense fallback={<div className="lazy-loader">Loading Skills...</div>}>
								<div className="homepage-skills">
									<Skills />
								</div>
							</Suspense>

							<Suspense fallback={<div className="lazy-loader">Loading Projects...</div>}>
								<div className="homepage-projects">
									<AllProjects />
								</div>
							</Suspense>

							<Suspense fallback={<div className="lazy-loader">Loading...</div>}>
								<div className="homepage-after-title">
									<div className="homepage-articles">
										{myArticles.map((article, index) => (
											<div
												className="homepage-article"
												key={(index + 1).toString()}
											>
												<Article
													key={(index + 1).toString()}
													date={article().date}
													title={article().title}
													description={article().description}
													link={article().link}
												/>
											</div>
										))}
									</div>
									<div className="homepage-works">
										<Works />
									</div>
								</div>
							</Suspense>

							<div className="page-footer">
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		</AnimatedPage>
	);
};

export default Homepage;