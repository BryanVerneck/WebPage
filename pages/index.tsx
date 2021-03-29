import React from 'react';
import Head from 'next/head'
import User from '../src/components/User';
import styles from '../styles/Home.module.css';
import Header from '../src/components/Header';
import DownButton from '../src/components/DownButton';
import AboutMe from '../src/components/AboutMe';

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Bryan Verneck</title>
      </Head>
      <Header 
          repoLink={"https://github.com/BryanVerneck?tab=repositories"}
          contactLink={"mailto:bryanverneck@gmail.com?subject=Questions"}
          ></Header>
      <section className={styles.section}>
        <User></User>
        <DownButton></DownButton>
      </section>
      <section className={styles.middleSection}>
        <AboutMe/>
      </section>
    </div>
  )
}
