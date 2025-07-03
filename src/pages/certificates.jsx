import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCertificate } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/certificates.css";

const Certificates = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "certificates");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certificates | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certificates" />
				<div className="content-wrapper">
					<div className="certificates-logo-container">
						<div className="certificates-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="certificates-main-container">
						<div className="title certificates-title">
							{INFO.certificates.title}
						</div>

						<div className="subtitle certificates-subtitle">
							{INFO.certificates.description}
						</div>

						<div className="certificates-container">
							<div className="certificates-section">
								<h2 className="certificates-section-title">
									<FontAwesomeIcon icon={faAward} /> Lomba
								</h2>
								<div className="certificates-list">
									{INFO.certificates.competition.map(
										(cert, index) => (
											<a
												href={cert.link}
												target="_blank"
												rel="noopener noreferrer"
												className="certificate-card-link"
												key={index}
											>
												<div className="certificate-card competition">
													<div className="certificate-card-title">
														{cert.title}
													</div>
													<div className="certificate-card-issuer">
														{cert.issuer} - {cert.year}
													</div>
													<div className="certificate-card-achievement">
														{cert.achievement}
													</div>
													<div className="certificate-card-view">
														Lihat Sertifikat
													</div>
												</div>
											</a>
										)
									)}
								</div>
							</div>

							<div className="certificates-section">
								<h2 className="certificates-section-title">
									<FontAwesomeIcon icon={faCertificate} />{" "}
									Bootcamp
								</h2>
								<div className="certificates-list">
									{INFO.certificates.bootcamp.map(
										(cert, index) => (
											<a
												href={cert.link}
												target="_blank"
												rel="noopener noreferrer"
												className="certificate-card-link"
												key={index}
											>
												<div className="certificate-card bootcamp">
													<div className="certificate-card-title">
														{cert.title}
													</div>
													<div className="certificate-card-issuer">
														{cert.issuer}
													</div>
													<div className="certificate-card-view">
														Lihat Sertifikat
													</div>
												</div>
											</a>
										)
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certificates;