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
	    gridTemplateRows:'25vh',
	    listStyleType: 'none',
        margin: '5vw 0 0 7vw',
    }

    const projListLi = {
        height:'15vh',
        width:'15vh',
        color:'#ffffff',
    }

    const projListLiP = {
        fontSize:'1.5em',
        fontStyle:'bold',
        whiteSpace:'nowrap'
    }

    const projIcon = {
        height:'100%',
        width:'100%'
    }
    return (
        <div className = 'Projects' style = {projectsStyle}>
            <ul style = {projListStyle}>
                <li style = {projListLi}>
                    <a href = "https://ericdsergio.webhop.me/Pages/orders/index.html" style = {projListLiP}>Inventory Management</a>
                    <img style = {projIcon} src={ordersIcon} />
                    </li>
                <li style = {projListLi}>
                    <a href="https://ericdsergio.webhop.me/Pages/tictactoe/index.html" style = {projListLiP}>Tic Tac Toe</a>
                    <img style = {projIcon} src={ticTacToeIcon} />
                    </li>
                <li style = {projListLi}>
                    <a href="https://ericdsergio.webhop.me/Pages/slotMachine/index.html" style = {projListLiP}>Slot Machine</a>
                    <img style = {projIcon} src={slotMachineIcon} />
                    </li>
                <li style = {projListLi}>
                    <a href = "https://ericdsergio.webhop.me/index.html#" style = {projListLiP}>Reclaim Documentation</a>
                    <img style = {projIcon} src = {reclaimIcon} />
                    </li>
            </ul>
        </div>
    )
}