import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Examples({options, onExampleSelected}) {
    const examplesStyle = {
        height:'75%',
        width:'5%'        
    }

    const selectedImgImg = {
        position:'absolute',
        top:'0',
        left:`0`,
        height:'100%',
        width:'100%',
        border:'solid orange 5px'
    }

    const dropDownStyle = {
        padding:'10px',
        borderRadius:'25px',
        outline:'4px solid blue',
        zIndex:'7'
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
        zIndex:0
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
            <p>one two three</p>
            <select
            style = {dropDownStyle}
            id = "example-select"
            value={selectedExample}
            onChange={handleExampleChange}
            >
                <option value="" disabled>Example Code Snippets</option>
                {options.map((option) => (
                    <option key={option.value} value = {option.value}>
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