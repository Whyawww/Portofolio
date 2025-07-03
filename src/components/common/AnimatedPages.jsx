import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
	initial: {
		opacity: 0,
		scale: 0.9,
		y: 20, // Mulai sedikit dari bawah
	},
	in: {
		opacity: 1,
		scale: 1,
		y: 0, // Bergerak ke posisi normal
	},
	out: {
		opacity: 0,
		scale: 0.9,
		y: -20, // Keluar sedikit ke atas
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
