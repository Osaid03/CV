"use client"; // Mark this file as a Client Component

import React, { useEffect, useRef } from "react"; // Import useRef and useEffect
import styles from "./Timeline.module.css"; // Import CSS Module

const timelineData = [
  {
    year: "2022 - Current",
    title: "University of West London",
    description: "Cyber Security BSc (Hons)",
    accentColor: "#41516C",
  },
  {
    year: "2017 - 2021",
    title: "High School",
    description: "Al Hayer - Al Ain",
    accentColor: "#FBCA3E",
  },
  {
    year: "2014 - 2017",
    title: "Secondary School",
    description: "Al Hayer - Al Ain",
    accentColor: "#E24A68",
  },
  {
    year: "2009 - 2014",
    title: "Primary School",
    description: "Al Hayer - Al Ain",
    accentColor: "#1B5F8C",
  },
];

const Timeline = () => {
  const timelineItemsRef = useRef([]); // reference for timeline items

  // IntersectionObserver to add 'visible' class
  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    timelineItemsRef.current.forEach((item) => observer.observe(item));

    return () => {
      // Clean up observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <h1 className={styles.heading}>Education</h1>
      <ul className={styles.timelineList}>
        {timelineData.map((item, index) => (
          <li
            key={index}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            style={{ "--accent-color": item.accentColor }}
            ref={(el) => (timelineItemsRef.current[index] = el)} // Add each card to the reference
          >
            <div className={styles.circle}></div>
            <div className={styles.content}>
              <div className={styles.date}>{item.year}</div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.descr}>{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
