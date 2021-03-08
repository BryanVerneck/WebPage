import React from 'react';
import styles from '../../styles/components/header.module.css';

export default function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.nameLogo}>
                    <h1>Bryan <span>Verneck</span></h1>
                </div >
                <ul className={styles.navigation}>
                    <a><li>Contact</li></a>
                    <a><li>Repositories</li></a>
                </ul>
            </div>
        </div>
    )
}