"use client"

import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { Reveal } from "../Reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const xRotation = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const yRotation = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  };

  return (
    <Reveal initialX={-50} delay={0.5}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={styles.container}
        style={{
          transformStyle: "preserve-3d",
          rotateX: xRotation,
          rotateY: yRotation,
        }}
      >
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          style={{ transform: "translateZ(100px)" }}
        />

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={demo} className={styles.link}>Demo</a>
          <a href={source} className={styles.link}>Source</a>
        </div>
      </motion.div>
    </Reveal>
  );
};