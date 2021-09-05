import React, { useState } from 'react';
import styles from './portfolio.module.css';
import { DiSafari, DiGithubAlt } from 'react-icons/di';
export default function Portfolio() {
  return (
    <div className='section'>
      <h3 className={styles.portfolio_title}>Things I've built</h3>
      <div className={styles.portfolio}>
        <div className={`${styles.portfolio_box} `}>
          <img src='/twetwe.png' alt='twetwe image' />
          <h2 className={styles.portfolio_box_title}>Twe Twe</h2>
          <p className={styles.portfolio_box_body}>
            TweTwe (Pronounced T we T we) is a social media platform that is
            similar to Twitter that was built using the mern stack. Users are
            able to create content, like, comment, and follow other users. Keep
            in mind that this is an MVP and some notable Twitter features are
            missing.
          </p>
          <div className={styles.icons}>
            <div className={styles.tooltip}>
              <a href='https://github.com/elisvcodes/TweTwe' target='_blank'>
                <DiGithubAlt />
                <span className={styles.tooltiptext}>GitHub</span>
              </a>
            </div>
            <div className={styles.tooltip}>
              <a href='https://twetwe.elisv.com/' target='_blank'>
                <DiSafari />
                <span className={styles.tooltiptext}>Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.portfolio_box} `}>
          <img src='/ioi.png' alt='korecss image' />
          <h2 className={styles.portfolio_box_title}>IOI Gaming</h2>
          <p className={styles.portfolio_box_body}>
            IOI (Pronounced Eye-O-Eye) is a fictional e-commerce platform that
            was built for gaming enthusiast to hunt for deals. As a shop owner
            you are able to managed everything from the admin area including
            adding products, view orders, and much more. The project was built
            using mern.
          </p>
          <div className={styles.icons}>
            <div className={styles.tooltip}>
              <a href='https://github.com/elisvcodes/IOIGaming' target='_blank'>
                <DiGithubAlt />
                <span className={styles.tooltiptext}>GitHub</span>
              </a>
            </div>
            <div className={styles.tooltip}>
              <a href='https://ioi.elisv.com/' target='_blank'>
                <DiSafari />
                <span className={styles.tooltiptext}>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className={`${styles.portfolio_box} `}>
          <img src='/offset.png' alt='offset image' />
          <h2 className={styles.portfolio_box_title}>OffSet</h2>
          <p className={styles.portfolio_box_body}>
            OffSet is a platform that compares the carbon footprint between
            reusable and non-reusable items. In the app, users can compare
            between items and see graphically which item is more environmentally
            sustainable. Users can save their favorite items by creating an
            account.
          </p>
          <div className={styles.icons}>
            <div className={styles.tooltip}>
              <a href='https://github.com/elisvcodes/offset' target='_blank'>
                <DiGithubAlt />
                <span className={styles.tooltiptext}>GitHub</span>
              </a>
            </div>
            <div className={styles.tooltip}>
              <a href='https://offset.elisv.com/' target='_blank'>
                <DiSafari />
                <span className={styles.tooltiptext}>Demo</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.portfolio_box} `}>
          <img src='/budget.png' alt='Budget Tracker image' />
          <h2 className={styles.portfolio_box_title}>Budget Tracker</h2>
          <p className={styles.portfolio_box_body}>
            The entire purpose of this project was to test my knowledge of
            vanilla JavaScript and my understanding of the DOM. Once I was able
            to keep track of different components and my code was not spaghetti
            code, I moved on to learning libraries such as React.
          </p>
          <div className={styles.icons}>
            <div className={styles.tooltip}>
              <a
                href='https://github.com/elisvcodes/budget-tracker'
                target='_blank'
              >
                <DiGithubAlt />
                <span className={styles.tooltiptext}>GitHub</span>
              </a>
            </div>
            <div className={styles.tooltip}>
              <a
                href='https://elisvcodes.github.io/budget-tracker/'
                target='_blank'
              >
                <DiSafari />
                <span className={styles.tooltiptext}>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
