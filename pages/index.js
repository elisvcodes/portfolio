import Head from 'next/head'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eli Sultanov</title>
        <meta name="description" content="Hi, my name is eli sultanov. Currently, I am a senior at Brooklyn College studying Computer Science. I enjoy building things using the MERN/PERN stack." />
        <link rel="icon" href="/svicon.ico" />
      </Head>
      <div className="container">
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        <About />
        <Footer />
      </div>
    </>
  )
}
