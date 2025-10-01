import React, { useState } from 'react';
import meImg from '../../assets/meHS.jpeg';

export default function About() {
    const aboutStyle = {
        height:'100%',
        width:'100%'
    }
    const pStyleUpper = {
        color:'rgb(255, 255, 255',
        fontSize:'1.3em',
        padding:'2%',
        width: 'calc(100% - 12vw)',
        margin: '6% 0 0 4%'
    }
    const pStyleLower = {
        color:'rgb(255, 255, 255',
        fontSize:'1.3em',
        width: 'calc(100% - 10vw)',
        margin: '2% 1% 2% 6%'
    }
    const meImgStyle = {
        position:'absolute',
        top:'0%',
        right:'0%',
        maxHeight:'calc(13vw)',
        maxWidth:'calc(13vw)',
        borderRadius:'0 30% 0 30%',
        zIndex:'6'
    }

    const desktopID = {
        position:'absolute',
        bottom:'5vh',
        left:'35vw',
        fontSize:'3em',
        color:'red',
    }
    return (
        <div className = 'About' style = {aboutStyle}>
            <img src = {meImg} style = {meImgStyle}/>
            <p className = 'aboutTxt' style = {pStyleUpper}>
                <span className = 'intro0'>My name is Eric Sergio and live in the Greater Seattle area. 
                    Thank you for taking the time to visit my website! I graduated from Bellevue College in 2023 with a BAS in Software Development. 
                    I graduated Magna Cum Laude with a 3.9 cumulative GPA. 
                    I have spent most of my life working in the restaurant industry, primarily as a bartender. </span>
            </p>
            <p className = 'aboutTxt' style = {pStyleLower}>
                <span className = "intro1">
                    A few years ago, when the older of my two daughters was 1 years old, I decided that I needed to pursue a new career that I would be passionate about and that would enable me to provide my daughters with more of my time and financial security. 
                    I was already passionate about software development and spent a great deal of my free time learning various programming languages. I love building, testing, tinkering, customizing, and generally solving the puzzles that software development presents. 
                    I began by working with VBA which led to SQL, C#, JavaScript and everything from AutoHotkey to Selenium. I am most proficient working with JavaScript, C#, Bash, and SQL. I prefer using UNIX/Linux but am just as capable working in Windows and am far more comfortable using a shell over a UI. 
                    I am proficient using cloud technologies and am in the final portion of completing the Google Cloud Cyber Security certification. Along with my technical skillset, I have a great deal of experience from working in a high-volume, fast-paced and high-stress restaurant environment, that includes teamwork, leadership, multi-tasking and more. Some of my hobbies include playing basketball, coaching my daughter’s soccer team, skateboarding, and everything involved from being a parent. 
                    I built this website from scratch and am hosting it via a Google Compute Engine virtual machine. Thank you for visiting!</span>
            </p>
            <p style = {desktopID}>DESKTOP ABOUT</p>
            </div>
    )
}