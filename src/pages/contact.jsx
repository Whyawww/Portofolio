import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../components/common/AnimatedPages";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import { useTranslation } from "react-i18next";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	const { t } = useTranslation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<AnimatedPage>
			<React.Fragment>
				<Helmet>
					<title>{`Contact | ${INFO.main.title}`}</title>
					<meta name="description" content={t('seo.contact')} />
					<meta
						name="keywords"
						content={currentSEO.keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar active="contact" />
					<div className="content-wrapper">
						<div className="contact-logo-container">
							<div className="contact-logo">
								<Logo width={46} />
							</div>
						</div>

						<div className="contact-container">
							<div className="title contact-title">
							{t('contact.title')}
							</div>

							<div className="subtitle contact-subtitle">
							{t('contact.subtitle_1')}
								&nbsp;{" "}
								<a href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</a>
								{t('contact.subtitle_2')}
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
								{t('contact.subtitle_3')}
							</div>
						</div>

						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</React.Fragment>
		</AnimatedPage>
	);
};

export default Contact;