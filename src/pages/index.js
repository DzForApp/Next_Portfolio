import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import TopBar from '../components/layout/TopBar'
import Intro from '../components/sections/Intro'
import About from '../components/sections/About'
import Resume from '../components/sections/Resume'
import Skills from '../components/sections/Skills'
import ContactMe from '../components/sections/ContactMe'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Kubertos Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='w-auto  bg-green-500  mb-4 '>
        <TopBar />
      </header>
      <main className='w-full py-12'>
        <Intro />
        <About />
        <div className='items-center'>
          <Resume />
        </div>
        <Skills />
        <ContactMe />

      </main>

      <footer className={styles.footer}>
          <Footer />
       
      </footer>
    </div>
  )
}
