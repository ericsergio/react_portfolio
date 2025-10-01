import React, { useState } from 'react';

export default function Projects() {
    const projectsStyle = {
        height:'75%',
        width:'100%'        
    }

    const projListStyle = {
        position: 'relative',
	    display:'grid',
	    gridTemplateColumns:'repeat(auto-fit, minmax(40%, 1fr))',
	    gridTemplateRows:'20vh',
	    listStyleType: 'none',
        margin: '10vw 0 0 7vw'
    }

    const projListLi = {
        height:'15vh',
        width:'40%',
        border:'solid blue 3px',
        color:'#ffffff'
    }
    return (
        <div className = 'Projects' style = {projectsStyle}>
            <ul style = {projListStyle}>
                <li style = {projListLi}>Orders</li>
                <li style = {projListLi}>Tic Tac Toe</li>
                <li style = {projListLi}>Slot Machine</li>
                <li style = {projListLi}>Reclaim Documentation</li>
            </ul>
        </div>
    )
}