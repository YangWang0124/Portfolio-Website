import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Yang Wang</h1>
                <p className={styles.description}>I am passionate about transforming ideas into creaLve technology and am pursuing a career in soNware development. With a background in graphic design and experience in Java, React and C#, I can turn design ideas into funcLonal soNware. I am reliable and hardworking, always delivering projects with responsibility. I am excited to join a team where I can leverage my skills and contribute to projects.</p>
                <a href="mailto:yangwang02885215668@gmail.com" className={styles.contactBtn}>
                    Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} 
            alt="Hero Image" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.btmBlur}/>
        </section>
    );
};