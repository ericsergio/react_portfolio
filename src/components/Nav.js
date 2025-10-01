import React from 'react';
import styled from 'styled-components';

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

    /*const NavLi = styled.li`
        margin-bottom: Calc(13.5%);
        position: relative;
        top: 25%;
        font-size: 1.7em;
        color: rgb(255,255,255);
        &:hover {
            cursor: pointer;
            color: rgb(22, 32, 11);
            transform: translateY(-2px);
        }
        &:active {
            color: rgb(101, 201, 149);
        }
    `;*/
    const pgLinks_li = {
        marginBottom:'Calc(13.5%)',
        position:'relative',
        top:'25%',
        fontSize:'1.7em',
        color:'rgb(255,255,255)',
    }

    return(
        /*<NavWrapper>*/
        <nav className="main-nav" style = {mainNavStyle}>
            {/*<NavUl>*/}
            <ul id = "pageLinks" style = {pgLinkStyle}>
                {/*<NavLi onClick={() => props.onNavigate('about')}>about</NavLi>*/}
                <li style = {pgLinks_li} onClick={() => props.onNavigate('about')}>about</li>
                {/*<NavLi onClick={() => props.onNavigate('resume')}>resume</NavLi>*/}
                <li style = {pgLinks_li} onClick={() => props.onNavigate('resume')}>resume</li>
                {/*<NavLi onClick={() => props.onNavigate('examples')}>examples</NavLi>*/}
                <li style = {pgLinks_li} onClick={() => props.onNavigate('examples')}>examples</li>
                {/*<NavLi onClick={() => props.onNavigate('projects')}>projects</NavLi>*/}
                <li style = {pgLinks_li} onClick={() => props.onNavigate('projects')}>projects</li>
                {/*<NavLi onClick={() => props.onNavigate('contact')}>contact</NavLi>*/}
                <li style = {pgLinks_li} onClick={() => props.onNavigate('contact')}>contact</li>
            </ul>
            {/*</NavUl>*/}
            </nav>
        /*</NavWrapper>*/
    );
};