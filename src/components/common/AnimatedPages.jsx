import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
	initial: {
		opacity: 0,
		scale: 0.9,
		y: 20,
	},
	in: {
		opacity: 1,
		scale: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		scale: 0.9,
		y: -20,
	},
};

const pageTransition = {
	type: "spring",
	ease: "easeInOut",
	duration: 0.6,
	stiffness: 100,
	damping: 20,
};

const AnimatedPage = ({ children }) => {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedPage;
