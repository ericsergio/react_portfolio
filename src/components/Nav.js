import React from 'react';

    const mainNavStyle = {
        position:'relative',
        height:'12%',
        backgroundColor:'#302e2e',
        color:'rgb(255,255,255)',
        width:'100%',
        listStyleType:'none'
    }

export default function Nav(props) {
    const pgLinkStyle = {
        display: 'grid',
        width:'70vw',
        height:'14vh',        
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        rowGap: 'calc(100vh / 15)',
        margin:'0 0 0 0',
        listStyleType: 'none',
        justifyItems:'center'
    }

    const pgLinks_li = {
        marginBottom:'Calc(13.5%)',
        position:'relative',
        top:'25%',
        font: 'clamp(0.6rem, 2.5vw, 3rem) bold Grey',
        color:'rgb(255,255,255)',
        cursor:'pointer',
    }

    return(
        <nav className="main-nav" style = {mainNavStyle}>
            <ul id = "pageLinks" style = {pgLinkStyle}>
                <li style = {pgLinks_li} onClick={() => props.onNavigate('about')}>about</li>
                <li style = {pgLinks_li} onClick={() => props.onNavigate('resume')}>resume</li>
                <li style = {pgLinks_li} onClick={() => props.onNavigate('examples')}>examples</li>
                <li style = {pgLinks_li} onClick={() => props.onNavigate('projects')}>projects</li>
                <li style = {pgLinks_li} onClick={() => props.onNavigate('contact')}>contact</li>
            </ul>
            </nav>        
    );
};