import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from './useWindowSize';

import '../App.css';

export default function Examples({options, onExampleSelected}) {


    const pDescriptionStyle = {        
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        padding:'2% 5%',
        marginLeft:'5%',
        backgroundColor:'rgba(16, 15, 4, 0.4)',
        width:'90%',
        fontWeight:'bold',
        color:'rgba(239, 236, 236, 1)',
    }

    const examplesStyle = {
        height:'100%',
        width:'100%',
        position:'absolute',        
        left:'calc(0vw)'        
    }

    const selectedImgImg = {
        position:'absolute',
        top:'0',
        left:`0`,
        height:'100%',
        width:'100%',
        border:'solid orange 5px',
        zIndex:7
    }

    const dropDownStyle = {
        marginLeft:'5%',
        padding:'10px',
        borderRadius:'15px',
        outline:'ridge rgba(233, 235, 240, 1) 10px',
        border:'ridge rgba(23, 31, 57, 1) 12px',
        width:'90%',
        textAlign:'center',
        zIndex:2,
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontFamily: '"Chivo", sans-serif',
        fontFamily: '"Exo 2", sans-serif',
        fontFamily: '"Space Mono", monospace', 
        /*transform: 'translateY(-50%)'
        content: '▼'*/
    }

    const exitExampleStyle = {
        position:'absolute',
        top:'-2%',
        right:'3%',
        fontSize:'2.3em',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontWeight:'bold',
        color:'rgb(242, 66, 12)',
        width:'4%',
        borderRadius:'45%',        
        background: 'linear-gradient(to top,rgb(169, 208, 220) 0%,rgb(119, 123, 166) 80%)',
        boxShadow:'5px 5px rgba(70, 123, 150, 0.6)',
        textAlign:'center',
        zIndex:7
    }

    const [selectedExample, setSelectedExample] = useState('');

    const handleExampleChange = (event) => {
        const newValue = event.target.value;        
        setSelectedExample(newValue);
        if(onExampleSelected) {
            onExampleSelected(newValue)            
        }
        
    };

    const selectedExampleData = options.find(option => option.value === selectedExample);

    const handleRm = (selectedExample) => {
        setSelectedExample('');
    }

    return (
        <div className = 'Examples' style = {examplesStyle}>
            <p style = {pDescriptionStyle}>
              These examples are code snippets of various projects that 
              show my contributions/work. This section is intended to 
              provide some insight of my coding ability/skills using 
              various languages. Unless I make a note saying otherwise, 
              everything included here is code that I originally wrote, 
              Click on the heading to display each example snippet.
            </p>
            <select
            className = 'dropdown-container'
            style = {dropDownStyle}
            id = "example-select"
            value={selectedExample}
            onChange={handleExampleChange}
            >
                <option value="" disabled>Example Code Snippets</option>
                {options.map((option) => (
                    <option className = 'dropdown-content' key={option.value} value = {option.value}>
                        {option.label}
                        </option>
                ))}
            </select>
            {selectedExample && selectedExampleData.imageUrl && (
                <div>                    
                    <img
                        className = {selectedExample} 
                        style = {selectedImgImg}
                        src={selectedExampleData.imageUrl}
                        alt={`Image of ${selectedExampleData.label}`}                    
                    />
                    <p className='xImg' style = {exitExampleStyle} onClick = {handleRm}>X</p>
                </div>
            )}
            {selectedExampleData && selectedExampleData.label}
        </div>
    )
}

Examples.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        imageUrl: PropTypes.string
    })).isRequired,
    onExampleSelected: PropTypes.func
};

Examples.defaultProps = {
    options: [],
    onExampleSelected:null
};