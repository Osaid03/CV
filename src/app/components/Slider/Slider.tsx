"use client"; // Mark this component as a Client Component

import React from "react";
import styles from "./Slider.module.css";

type SliderProps = {
    sliders: readonly {
        id: string;
        imageUrl: string;
        redirectUrl: string;
        title: string;
    }[];
};
const Slider: React.FC<SliderProps> = ({ sliders }) => {
    const handleClick = (redirectUrl: string) => {
        window.open(redirectUrl, "_blank");
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
                {/* Previous button */}
                <button id="prev-slide" className={styles.slideButton}>
                    &lt;
                </button>

                {/* Image list */}
                <div className={`${styles.imageList}`}>
                    {sliders.map((slider) => (
                        <div
                            key={slider.id}
                            className={`${styles.imageItemContainer} group`}
                            onClick={() => handleClick(slider.redirectUrl)}
                        >
                            {/* Certificate image */}
                            <img
                                src={slider.imageUrl}
                                alt={slider.title}
                                className={`${styles.imageItem} transition-transform group-hover:scale-105`}
                            />

                            {/* Hover text */}
                            <span className={styles.hoverText}>
                                {slider.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Next button */}
                <button id="next-slide" className={styles.slideButton}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;
