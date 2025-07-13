import React, { useEffect, useState } from "react";
import "./styles/stars.css";

const StarsBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            const numStars = 100; // Jumlah bintang
            for (let i = 0; i < numStars; i++) {
                const style = {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                };
                newStars.push(<div key={i} className="star" style={style}></div>);
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return <div className="stars-background">{stars}</div>;
};

export default StarsBackground;