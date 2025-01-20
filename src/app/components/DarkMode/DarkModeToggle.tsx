
// components/DarkModeToggle.tsx
'use client'; // <-- Add this line

import React, { useEffect, useState } from "react";
import styles from "./DarkModeToggle.module.css";

type DarkModeToggleProps = {
    darkmode: boolean;
};

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkmode }) => {
    const [isDarkMode, setIsDarkMode] = useState(darkmode);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("darkmode", "true");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("darkmode", "false");
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={styles.toggleContainer}>
            <button onClick={handleToggle} className={styles.toggleButton}>
                {isDarkMode ? "🌙" : "☀️"}
            </button>
        </div>
    );
};

export default DarkModeToggle;
