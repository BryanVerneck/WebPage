import React from 'react';
import Head from 'next/head'
import User from '../src/components/User';
import styles from '../styles/Home.module.css';
import Header from '../src/components/Header';
import DownButton from '../src/components/DownButton';

export default function App() {
  return (
    <div>
      <Head>
        <title>Inicio | Bryan Verneck</title>
      </Head>
      <section className={styles.section}>
        <Header 
          repoLink={"https://github.com/BryanVerneck?tab=repositories"}
          contactLink={"https://github.com/BryanVerneck?tab=repositories"}
          ></Header>
        <User></User>
        <DownButton></DownButton>
      </section>
      <section className={styles.section} style={{backgroundColor: "#232424"}}></section>
      <section className={styles.section}></section>
    </div>
  )
}
