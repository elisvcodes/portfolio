import React from 'react';
import styles from './skills.module.css';
import { DiReact, DiNodejs, DiBingSmall } from 'react-icons/di';
export default function Skills() {
  return (
    <div className={`section`}>
      <h3 className={styles.skills_title}>Skills I bring to the table</h3>
      <ul className={styles.skills}>
        <li className={styles.skill_box}>
          <span className={styles.skill_icon}>
            <DiReact />
          </span>
          <h2 className={styles.skill_box_title}>Frontend</h2>
          <p className={styles.skill_box_body}>
            Since junior year of college, I've had the pleasure of working with
            both React and vanilla JavaScript, building both simple and complex
            web apps that solve my day-to-day problems, for example, tracking my
            budget.
          </p>
        </li>
        <li className={styles.skill_box}>
          <span className={styles.skill_icon}>
            <DiNodejs />
          </span>
          <h2 className={styles.skill_box_title}>Backend</h2>
          <p className={styles.skill_box_body}>
            Discovering how to work with the backend during my senior year of
            college allowed me to grow as a developer and implement more complex
            logic to my current and future projects. One such project is a bug
            tracker.{' '}
          </p>
        </li>
        <li className={styles.skill_box}>
          <span className={styles.skill_icon}>
            <DiBingSmall />
          </span>
          <h2 className={styles.skill_box_title}>SEO</h2>
          <p className={styles.skill_box_body}>
            I believe having some knowledge of Search Engine Optimization is a
            great skill to have because it allows you as the developer to build
            better websites that search engines such as Google can understand
            and rank better.
          </p>
        </li>
      </ul>
    </div>
  );
}
