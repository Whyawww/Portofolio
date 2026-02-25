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
							<div className="work-logo-container">
								<img
									src="https://konten.usu.ac.id/storage/satker/0/null/2023-Jun/PT-Suitmedia-Kreasi-Indonesia.webp"
									alt="Suitmedia Digital Agency"
									className="work-image"
								/>
							</div>
							<div className="work-text-container">
								<div className="work-title">
									Suitmedia Digital Agency
								</div>
								<div className="work-subtitle">
									Frontend Developer (Internship)
								</div>
								<div className="work-duration">
									Aug 2025 - Dec 2025
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-logo-container">
								<img
									src="https://pluspng.com/img-png/google-logo-png-open-2000.png"
									alt="Google Indonesia"
									className="work-image"
								/>
							</div>
							<div className="work-text-container">
								<div className="work-title">
									Google Indonesia
								</div>
								<div className="work-subtitle">
									Google Student Ambassador
								</div>
								<div className="work-duration">
									Sep 2025 - Feb 2026
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-logo-container">
								<img
									src="https://tse2.mm.bing.net/th/id/OIP.aegHwksODdK-E6bOUMks5AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
									alt="ABP Incubator Yogyakarta"
									className="work-image"
								/>
							</div>
							<div className="work-text-container">
								<div className="work-title">ABP Yogyakarta</div>
								<div className="work-subtitle">
									Content Writer (Internship)
								</div>
								<div className="work-duration">
									June 2025 - Oct 2025
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-logo-container">
								<img
									src="https://verifikasi-aept.amikom.ac.id/review/logo_amikom_1.png"
									alt="Universitas Amikom Yogyakarta"
									className="work-image"
								/>
							</div>
							<div className="work-text-container">
								<div className="work-title">
									BPC Universitas Amikom Yogyakarta
								</div>
								<div className="work-subtitle">
									Surveyor (Internship)
								</div>
								<div className="work-duration">
									Sep 2023 - Feb 2024
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
