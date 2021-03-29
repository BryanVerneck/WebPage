import React from 'react';
import styles from '../../styles/components/AboutMe.module.css';
import { ImLinkedin, ImFacebook2, ImTwitter, ImGithub } from "react-icons/im";

export default function AboutMe(){
    return(
        <div className={styles.container}>
            <>
                <h1>About me</h1>
                <p>
                Hi, my name is Bryan, I'm 21 years old, 
                I'm a computer science student and I'm passionate about WEB development.
                </p> 
            </>
            <div className={styles.footerIcons}>
                <ImLinkedin></ImLinkedin>
                <ImFacebook2></ImFacebook2>
                <ImTwitter></ImTwitter>
                <ImGithub></ImGithub>
            </div>    
        </div>
    )
}
