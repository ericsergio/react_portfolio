import React, { useState } from 'react';
import ordersIcon from '../../src/assets/ordersImg.png';
import ticTacToeIcon from '../../src/assets/tictactoeImg.png';
import slotMachineIcon from '../../src/assets/slotMachineImg.png';
import reclaimIcon from '../../src/assets/reclaimImg.png';
import useWindowSize from './useWindowSize';

export default function Projects() {
    const isMobile = useWindowSize().isMobile;

    const projectsStyle = {        
        height:'auto',
        width:'auto',
    }

    const projListStyle = {
        position: 'relative',
	    display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
        gridTemplateRows:'repeat(1fr)',
        gridAutoRows:'20vh',
        rowGap:'50px',
	    listStyleType: 'none',
        margin: '5vw 0 0 9vh',
        padding:'10%',
    }

    const projListLi = {
        height:'15vh',
        width:'15vh',        
    }

    const projListLiA = {
        maxHeight:'100%',
        maxWidth:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'10px',
        fontSize:'1.5em',
        fontStyle:'bold',
        whiteSpace:'nowrap',
        color:'#ffffff',
        textDecoration:'none',
        fontFamily: '"Open Sans", sans-serif',
        fontVariant: 'small-caps',
    }

    const projIcon = {
        maxHeight:'100%',
        maxWidth:'100%',
        height:'auto',
        width:'auto',
        maxHeight:'80%',
        maxWidth:'80%',
    }
    return (
        <div className = 'Projects' style = {projectsStyle}>
            <ul style = {projListStyle}>
                <li style = {projListLi}>
                    <a href = "https://ericdsergio.webhop.me/Pages/orders/index.html" style = {projListLiA}>Inventory Management
                    <img style = {projIcon} src={ordersIcon} alt = "Order App icon" /></a>
                    </li>
                <li style = {projListLi}>
                    <a href="https://ericdsergio.webhop.me/Pages/tictactoe/index.html" style = {projListLiA}>Tic Tac Toe
                    <img style = {projIcon} src={ticTacToeIcon} alt = "tic tac toe App icon"  /></a>
                    </li>
                <li style = {projListLi}>
                    <a href="https://ericdsergio.webhop.me/Pages/slotMachine/index.html" style = {projListLiA}>Slot Machine
                    <img style = {projIcon} src={slotMachineIcon} alt = "slot machine App icon"  /></a>
                    </li>
                <li style = {projListLi}>
                    <a href = "https://ericdsergio.webhop.me/index.html#" style = {projListLiA}>Reclaim
                    <img style = {projIcon} src = {reclaimIcon} alt = "Reclaim game documentation icon"  /></a>
                    </li>
            </ul>
        </div>
    )
}