import React, { useState } from 'react'
import styles from './portfolio.module.css'
import Image from 'next/image'
import { DiSafari, DiGithubAlt } from 'react-icons/di'
export default function Portfolio() {
    return (
        <div className='section'>
            <h3 className={styles.portfolio_title}>Things I've built</h3>
            <div className={styles.portfolio}>
                <div className={`${styles.portfolio_box} ${styles.box1}`}>
                    <div className="portfolio_img">
                        <Image
                            src='/rsz_kore.png'
                            width={2660}
                            height={1200}
                            objectPosition='fill'
                            objectFit='contain'
                        />
                    </div>
                    <h2 className={styles.portfolio_box_title}>KoreCSS</h2>
                    <p className={styles.portfolio_box_body}>This was my first attempt at creating something for the open source community. KoreCSS is a simple CSS library with core functions such as a navbar, a grid system powered by flexbox, forms, and other util classes that speed up the process of building websites.</p>
                    <div className={styles.icons}>
                        <a href='https://github.com/elisvcodes/KoreCSS' target='_blank'><DiGithubAlt /></a>
                        <a href='https://elisvcodes.github.io/kore-site/' target='_blank'><DiSafari /></a>
                    </div>
                </div>

                <div className={`${styles.portfolio_box} ${styles.box2}`}>
                    <div className="portfolio_img">
                        <Image
                            src='/rsz_1bt.png'
                            width={2660}
                            height={1200}
                            objectPosition='fill'
                            objectFit='contain'
                        />
                    </div>
                    <h2 className={styles.portfolio_box_title}>Budget Tracker</h2>
                    <p className={styles.portfolio_box_body}>The entire purpose of this project was to test my knowledge of vanilla JavaScript and my understanding of the DOM. Once I was able to keep track of different components and my code was not spaghetti code, I moved on to learning libraries such as React.</p>
                    <div className={styles.icons}>
                        <a href='https://github.com/elisvcodes/budget-tracker/' target='_blank'><DiGithubAlt /></a>
                        <a href='https://elisvcodes.github.io/budget-tracker/' target='_blank'><DiSafari /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
