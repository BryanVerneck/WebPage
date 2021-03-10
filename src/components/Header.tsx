import React from 'react';
import styles from '../../styles/components/Header.module.css';

export default function Header({ repoLink, contactLink }){
    return(
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.nameLogo}>
                    <h1>Bryan <span>Verneck</span></h1>
                </div >
                <ul className={styles.navigation}>
                    <a href={contactLink} target="_blank"><li>E-mail</li></a>
                    <a href={repoLink} target="_blank"><li>GitHub</li></a>
                </ul>
            </div>
        </div>
    )
}