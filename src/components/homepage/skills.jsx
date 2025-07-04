import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import INFO from "../../data/user";

import "./styles/skills.css";

const Skills = () => {
	// Duplikasi array logo untuk menciptakan efek loop yang mulus
	const duplicatedLogos = [...INFO.skills.logos, ...INFO.skills.logos];

	return (
		<div className="skills-container">
			<div className="skills-title">
				<FontAwesomeIcon icon={faCode} />
				Technical Skills
			</div>
			<div className="skills-marquee">
				<div className="skills-track">
					{duplicatedLogos.map((skill, index) => (
						<div className="skill-card" key={index}>
							<img
								src={skill.logoUrl}
								alt={skill.name}
								className="skill-logo"
							/>
							<div className="skill-name">{skill.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;