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
        <Header></Header>
        <User></User>
        <DownButton></DownButton>
      </section>
      <div className={styles.section} style={{backgroundColor: "#232424"}}></div>
    </div>
  )
}