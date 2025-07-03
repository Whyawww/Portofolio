import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AnimatedPage from "../components/common/AnimatedPages";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<AnimatedPage>
			<React.Fragment>
				<Helmet>
					<title>{`Projects | ${INFO.main.title}`}</title>
					<meta name="description" content={currentSEO.description} />
					<meta
						name="keywords"
						content={currentSEO.keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar active="projects" />
					<div className="content-wrapper">
						<div className="projects-logo-container">
							<div className="projects-logo">
								<Logo width={46} />
							</div>
						</div>
						<div className="projects-container">
							<div className="title projects-title">
								Bringing Data to Life Through Code.
							</div>

							<div className="subtitle projects-subtitle">
								Here you will find a selection of my work, from data analysis scripts to fully functional web 
								applications. I'm passionate about solving problems and turning ideas into tangible products. 
								Most of these projects are open-source, so feel free to explore the code on GitHub. 
								I'm always open to new ideas and collaboration.
							</div>

							<div className="projects-list">
								<AllProjects />
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

export default Projects;
