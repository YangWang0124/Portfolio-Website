import React from "react";
import styles from "./Hero.module.css";
import ModelViewer from "./ModelViewer";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yang Wang</h1>
        <p className={styles.description}>
          I am passionate about turning ideas into meaningful digital
          experiences and building my career in software development. With a
          background in graphic design and hands-on experience in Java, React,
          and C#, I enjoy bridging creativity with technology to create clean,
          functional, and user-focused solutions. I am reliable, hardworking,
          and take pride in delivering high-quality work with care and
          responsibility.
        </p>
        <a href="mailto:y6228725@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className="w-full h-56 sm:h-80 md:h-[250px] lg:h-[250px] overflow-hidden">
        <ModelViewer />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.btmBlur} />
    </section>
  );
};
