import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://tse2.mm.bing.net/th/id/OIP.aegHwksODdK-E6bOUMks5AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
								alt="ABP Incubator Yogyakarta"
								className="work-image"
							/>
							<div className="work-title">ABP Yogyakarta</div>
							<div className="work-subtitle">
								Volunteer Content Writer
							</div>
							<div className="work-duration">29 Mei 2024 - Now</div>
						</div>

						<div className="work">
							<img
								src="https://verifikasi-aept.amikom.ac.id/review/logo_amikom_1.png"
								alt="Universitas Amikom Yogyakarta"
								className="work-image"
							/>
							<div className="work-title">
								BPC Universitas Amikom Yogyakarta
							</div>
							<div className="work-subtitle">
								Surveyor (Magang)
							</div>
							<div className="work-duration">Sep 2023 - Feb 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;