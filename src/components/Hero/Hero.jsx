import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lucas</h1>
        <p className={styles.description}>
          I'm a Full-stack developer (Front-end heavy) with over 5 years of
          experience using React, Javascript, Typescript, Next, Node, Python and
          others. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:lucasrafael431@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
