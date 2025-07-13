import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import INFO from "../../data/user";

import "./styles/skills.css";

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
		},
	},
};

const Skills = () => {
	return (
		<div className="skills-container">
			<div className="skills-title">
				<FontAwesomeIcon icon={faCode} />
				Technical Skills
			</div>
			<motion.div
				className="skills-grid"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{INFO.skills.logos.map((skill, index) => (
					<motion.div
						className="skill-card"
						key={index}
						variants={itemVariants}
					>
						<img
							src={skill.logoUrl}
							alt={skill.name}
							className="skill-logo"
						/>
						<div className="skill-name">{skill.name}</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Skills;