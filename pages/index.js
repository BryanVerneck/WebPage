import React from 'react';
import User from '../src/components/user';
import styles from '../styles/Home.module.css';
import Header from '../src/components/header';
import DownButton from '../src/components/downButton';

export default function App() {
  return (
    <div>
      <section className={styles.section}>
        <Header></Header>
        <User></User>
        <DownButton></DownButton>
      </section>
      <div className={styles.section} style={{backgroundColor: "#232424"}}></div>
    </div>
  )
}
