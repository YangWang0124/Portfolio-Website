import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { Reveal } from "../Reveal";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <Reveal initialX={-50} delay={0.3}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="AboutImage"
            className={styles.aboutImage}
          />
        </Reveal>

        <ul className={styles.aboutItems}>
          <Reveal initialX={-50} delay={0.4}>
            <li className={styles.aboutItem}>
              <img
                className={styles.icon}
                src={getImageUrl("about/icon1.png")}
                alt="Icon1"
              />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                Passionate about building intuitive and visually engaging user interfaces. I enjoy transforming design concepts into responsive, accessible, and polished frontend experiences.
                </p>
              </div>
            </li>
          </Reveal>

          <Reveal initialX={-50} delay={0.5}>
            <li className={styles.aboutItem}>
              <img
                className={styles.icon}
                src={getImageUrl("about/icon2.png")}
                alt="Icon2"
              />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                Experienced in developing reliable application logic and backend systems. I enjoy solving technical challenges and ensuring that applications run efficiently and securely.
                </p>
              </div>
            </li>
          </Reveal>

          <Reveal initialX={-50} delay={0.6}>
            <li className={styles.aboutItem}>
              <img
                className={styles.icon}
                src={getImageUrl("about/icon3.png")}
                alt="Icon3"
              />
              <div className={styles.aboutItemText}>
                <h3>Graphic Designer</h3>
                <p>
                Skilled in turning creative ideas into visually compelling designs. With a strong foundation in layout, branding, and visual communication, I bring a design-focused approach to software development.
                </p>
              </div>
            </li>
          </Reveal>
        </ul>
      </div>
    </section>
  );
};
