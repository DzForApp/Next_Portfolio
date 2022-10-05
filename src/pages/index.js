import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TopBar from "../components/layout/TopBar";
import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Works from "../components/sections/Works";
import Skills from "../components/sections/Skills";
import ContactMe from "../components/sections/ContactMe";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";

export default function Home() {
  return (
    <div className="bg-white w-full min-w-min container">
      <Head>
        <title>Kubertos Portfolio</title>
        <meta name="description" content="Generated by create Kubertos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" justify-center   ">
        <TopBar />
      </header>
      <Main className=" flex flex-row sm:w-full">
        <Intro />
        <About />
        <div>
          <Skills />
        </div>
        <Works />
        <ContactMe />
      </Main>

      <footer className="w-full max-h-64 mt-32">
        <Footer />
      </footer>
    </div>
  );
}
