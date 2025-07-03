import React from "react";
import { motion } from "framer-motion";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const AllProjects = () => {
	return (
		<motion.div
			className="all-projects-container"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			{INFO.projects.map((project, index) => (
				<motion.div
					className="all-projects-project"
					key={index}
					variants={itemVariants}
				>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</motion.div>
			))}
		</motion.div>
	);
};

export default AllProjects;