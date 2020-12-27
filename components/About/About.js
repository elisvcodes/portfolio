import React, { useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open)

    return (
        <div className={`section ${styles.about_me}`}>
            <h3 className={styles.about_me_title}>My little story</h3>
            <div className={styles.story}>
                <div className={styles.story_pic}>
                    <Image
                        src='/mypic.png'
                        width={300}
                        height={300}
                        objectFit='contain'
                        alt='Eli Sultanov'
                    />
                </div>
                <div className={styles.story_text}>
                    <p>Hi,</p>
                    <p>
                        my name is Eli Sultanov. Currently, I am in the last year of my bachelor's program, majoring in computer science. I've been programming since I was ten years old and, the very first language I played with was visual basics. I followed some YouTube tutorials and ended up building a simple web browser powered by the gecko engine (the same engine firefox uses).
                    </p>
                    <div>
                        <button onClick={handleClick} className={styles.btn}> Read on!</button>
                    </div>
                    <p className={open ? styles.show : styles.hide}>
                        A decade later and I am still as passionate about programming as I was back then. Today I primarily work with the web, building web apps using tools such as,  React, Node.JS, and I am always on the lookout for new tools that help me build my projects faster.
                    </p>
                    <p className={open ? styles.show : styles.hide}>
                        PS: This site was built using Next.js.
                    </p>
                </div>
            </div>
        </div>
    )
}
