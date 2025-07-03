import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/skills.css";

const Skills = () => {
	const renderSkills = (skillArray) => {
		return skillArray.map((skill, index) => (
			<span key={index} className="skill-tag">
				{skill}
			</span>
		));
	};

	return (
		<div className="skills">
			<Card
				icon={faCode}
				title="Technical Skills"
				body={
					<div className="skills-body">
						<div className="skill-category">
							<strong>Languages:</strong>
							<div className="skill-tags">
								{renderSkills(INFO.skills.languages)}
							</div>
						</div>
						<div className="skill-category">
							<strong>Frameworks & Libraries:</strong>
							<div className="skill-tags">
								{renderSkills(INFO.skills.frameworks)}
							</div>
						</div>
						<div className="skill-category">
							<strong>Database:</strong>
							<div className="skill-tags">
								{renderSkills(INFO.skills.database)}
							</div>
						</div>
						<div className="skill-category">
							<strong>Tools:</strong>
							<div className="skill-tags">
								{renderSkills(INFO.skills.tools)}
							</div>
						</div>
						<div className="skill-category">
							<strong>Design:</strong>
							<div className="skill-tags">
								{renderSkills(INFO.skills.design)}
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;