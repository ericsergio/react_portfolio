import React, { useState } from 'react';
import ordersIcon from '../../../src/assets/ordersImg.png';
import ticTacToeIcon from '../../../src/assets/tictactoeImg.png';
import slotMachineIcon from '../../../src/assets/slotMachineImg.png';
import reclaimIcon from '../../../src/assets/reclaimImg.png';

export default function Projects() {
    const projectsStyle = {
        height:'75%',
        width:'100%'        
    }

    const projListStyle = {
        position: 'relative',
	    display:'grid',
	    gridTemplateColumns:'repeat(auto-fit, minmax(40%, 1fr))',
	    gridTemplateRows:'30vh',
	    listStyleType: 'none',
        margin: '5vw 0 0 7vw',
    }

    const projListLi = {
        height:'15vh',
        width:'15vh',
    }

    const projListLiA = {
        width:'100%',
        height:'100%',
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
        height:'100%',
        width:'100%'
    }
    return (
        <div className = 'Projects' style = {projectsStyle}>
            <ul style = {projListStyle}>
                <li style = {projListLi}>
                    <a href = "https://ericdsergio.webhop.me/Pages/orders/index.html" style = {projListLiA}>Orders
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