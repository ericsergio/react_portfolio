import React from 'react';
import { useState, useEffect } from 'react';
import burger from '../../src/assets/icons/burger.png';
import useWindowSize from './useWindowSize';
import '../App.css';

const mainNavStyle = {
    position:'relative',
    maxHeight:'12%',
    backgroundColor:'#302e2e',
    color:'rgb(255,255,255)',
    width:'100%',
    listStyleType:'none',
}

export default function Nav(props) {
    const isMobile = useWindowSize().isMobile;
    
    const ulMobileStyle = {
        position:'fixed',
        width:'25vw',
        height:'20vh',
        marginTop:'-10px',
        backgroundColor:'rgb(255,252,251)',        
        display:'block',
        zIndex:'2',        
        zIndex:'7',
    }

    const pgLinks_Li_Mobile = {
        margin:'10px -15px',
        color:'rgb(20,30,40)',

        cursor:'pointer',
    }

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

    const burger_li = {
        height:'7vh',
        width:'9vh',
        marginTop:'4vh',
        backgroundColor:'rgb(255,255,255)',
        borderRadius:'12%',
        padding:'7px',
        border:'3px solid rgb(0,0,0)',
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const NAV_ITEMS = ['about', 'resume', 'examples', 'projects', 'contact'];

    if(!isMobile) {
        return(
            <nav className="main-nav" style = {mainNavStyle}>
                <ul id = "pageLinks" style = {pgLinkStyle}>
                    {NAV_ITEMS.map(item => (
                        <li
                            key = {item}
                            style = {pgLinks_li}
                            onClick={() => props.onNavigate(item)}
                    >
                        {item}
                        </li>
                    ))}
                    </ul>              
            </nav>
        );
    } else {
        return(
            <nav className="main-nav-mobile" style = {mainNavStyle}>
                <ul id = "pageLinks" style = {pgLinkStyle}>
                    <li>
                        <img src={burger} style = {burger_li} onClick={toggleMenu} alt = "Menu" />    
                    </li>
                </ul>
                {isMenuOpen && (
                    <ul id = "mobilelinks" style={ulMobileStyle}>
                        {NAV_ITEMS.map(item => (
                            <li
                            key = {item}
                            style = {pgLinks_Li_Mobile}
                            onClick = {() => { 
                                props.onNavigate(item);
                                toggleMenu();
                            }}
                            >
                            {item}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        )
    }
};