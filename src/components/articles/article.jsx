import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;
	const { t } = useTranslation();
	return (
		<div className="article">
			<div className="article-date">{date}</div>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="article-link"
			>
				<div className="article-content">
					<div className="article-title">{title}</div>
					<div className="article-description">{description}</div>
					<div className="article-read-more">
					{t('article_component.read_more')}{" "}
						<FontAwesomeIcon
							className="fa-chevron-right"
							icon={faChevronRight}
						/>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Article;