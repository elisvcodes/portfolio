import Head from 'next/head'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eli Sultanov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Navbar />
        <Hero />
        <Skills />
        <About />
      </div>
    </>
  )
}
