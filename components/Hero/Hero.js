import React from 'react'
import styles from './hero.module.css'
export default function Hero() {
    return (
        <div className={`section ${styles.hero}`}>
            <h1 className={styles.hero_title}>
                Currently, I am a senior at Brooklyn College studying Computer Science. I enjoy building things using the MERN/PERN stack.
            </h1>
        </div>
    )
}
