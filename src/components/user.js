import React from 'react';
import styles from '../../styles/components/user.module.css';

export default function User(){
    return(      
        <div className={styles.user}>
            <span>
                <img src="https://avatars.githubusercontent.com/u/40044852?s=400&u=99e63fe119e4c75b29e6b13d7f043274dd6b06dd&v=4" className={styles.img}></img>
            </span>
            <div>
                <h2 className={styles.name}>
                    Bryan Verneck
                </h2>
                <p style={{color: "white"}}>Full Stack developer</p>
            </div>
        </div>   
    )
}
