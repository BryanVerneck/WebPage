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
                    <a href={contactLink}><li>Contact</li></a>
                    <a href={repoLink}><li>Repositories</li></a>
                </ul>
            </div>
        </div>
    )
}