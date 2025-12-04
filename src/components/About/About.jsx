import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img
                src={getImageUrl("about/aboutImage.png")}
                alt="AboutImage"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img className={styles.icon} src={getImageUrl("about/icon1.png")} alt="Icon1" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Passionate about crafting intuitive user interfaces and solving design challenges.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.icon} src={getImageUrl("about/icon2.png")} alt="Icon2" />
                        <div  className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Passionate about solving backend challenges and ensuring reliable application functionality.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.icon} src={getImageUrl("about/icon2.png")} alt="Icon3" />
                        <div  className={styles.aboutItemText}>
                            <h3>Graphic Designer</h3>
                            <p>Skilled in translating clients' design concepts into practical function with a focus on performance and accessibility.</p>
                        </div>
                    </li>
                    </ul>
            </div>
        </section>
    );
};