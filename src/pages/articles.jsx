import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";
import AnimatedPage from "../components/common/AnimatedPages";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<AnimatedPage>
			<React.Fragment>
				<Helmet>
					<title>{`Articles | ${INFO.main.title}`}</title>
					<meta name="description" content={currentSEO.description} />
					<meta
						name="keywords"
						content={currentSEO.keywords.join(", ")}
					/>
				</Helmet>

				<motion.div
					className="page-content"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<NavBar active="articles" />
					<div className="content-wrapper">
						<div className="articles-logo-container">
							<div className="articles-logo">
								<Logo width={46} />
							</div>
						</div>

						<div className="articles-main-container">
							<motion.div
								className="title articles-title"
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{INFO.articles.title}
							</motion.div>

							<motion.div
								className="subtitle articles-subtitle"
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								{INFO.articles.description}
							</motion.div>

							<div className="articles-container">
								<div className="articles-wrapper">
									{myArticles.map((article, index) => (
										<motion.div
											className="articles-article"
											key={(index + 1).toString()}
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
										>
											<Article
												key={(index + 1).toString()}
												date={article().date}
												title={article().title}
												description={
													article().description
												}
												link={article().link}
											/>
										</motion.div>
									))}
								</div>
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</motion.div>
			</React.Fragment>
		</AnimatedPage>
	);
};

export default Articles;
