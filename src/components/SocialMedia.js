import React from 'react';
import mailIcon from '../assets/icons/mailIcon.png';
import githubIcon from '../assets/icons/githubIcon.png';
import linkedInIcon from '../assets/icons/linkedInIcon.png';

export default function SocialMedia() {
    const iconsStyle_ul = {
        width:'20vw',
        height:'10vh',
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        listStyleType:'none',
        margin:'0 0 0 5%',
    }

    const externalNavContainerStyle = {
        position:'absolute',
        top:'0vh',
        right:'8vw',
        height:'12%',
        color:'green',
        width:'30vw',
        listStyleType:'none',        
    }

    const liImgStyle_img = {
        width:'calc(10vw)',
        height:'calc(13vh)',        
        //margin:'calc(-1vh) calc(0vw)',
        position:'relative',        
    }
    /* the parent to the images is the li and therefor calc values will be relative to the li's values
    so the img calc values are relative to the li which will be relative to the ul (if I use calc) which has a height set to 10vh*/
    return(
        <nav className="external-nav" style = {externalNavContainerStyle}>
            <ul id = "socialIcons" style = {iconsStyle_ul}>
                <li>
                    <a href="'mailto:ericdsergio87@icloud.com" target ="_blank">
                        <img style = {liImgStyle_img}                
                        src = {mailIcon} 
                        alt = "mail Icon Link"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ericsergio" target ="_blank">
                        <img style = {liImgStyle_img}
                        src = {githubIcon} 
                        alt = "github Icon Link"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ericsergio/" target ="_blank">
                        <img style = {liImgStyle_img}
                        src = {linkedInIcon} 
                        alt = "LinkedIn Icon Link"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
};