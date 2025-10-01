import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
import Nav from './components/Nav.js';
import SocialMedia from './components/SocialMedia.js';
import useWindowSize from './components/useWindowSize';
import './App.css';

import {   
  About as DesktopAbout,
  Resume as DesktopResume,
  Examples as DesktopExamples,
  Projects as DesktopProjects,
  Contact as DesktopContact,
} from './components/desktop';

import {   
  About as MobileAbout,
  Resume as MobileResume,
  Examples as MobileExamples,
  Projects as MobileProjects,
  Contact as MobileContact,
} from './components/mobile';


function App() {

  const { width } = useWindowSize();

  const breakpoint = 768;

  const isMobile = width < breakpoint ? true : false;

  console.log(isMobile);
  const topBarStyle = {
    margin:'0',
    backgroundColor:'rgb(40, 162, 184)'
  }

  const pageContainerStyle = {
    position:'absolute',
    top:'16vh',
    left:'11vw',    
    height:'70vh',
    width:'78vw',
    boxShadow:'0 30px 20px rgba(0, 0, 0, 0.7)',
    borderRadius:'0 12% 0 0',
    background:'radial-gradient(circle at 90% 5%, rgba(0, 0, 0, 1) 2%, transparent 95%) 90% 25%, \
    radial-gradient(circle at 55% 5%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, .7) 90%) 25% 5%, \
    radial-gradient(circle at 85% 55%, rgba(0, 0, 0, 0) 82%, rgba(0, 0, 0, .7) 90%) 5% 25%' 
  }

  const pDescriptionStyle = {
    fontSize:'1.4em',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color:'#fff',
    padding:'3% 8%',
    fontWeight:'bold'
  }

  const dropDownStyle = {
    margin:'5%'
  }

  const[activePage, setActivePage] = useState('about');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const [selectedExample, setSelectedExample] = useState('');

  const handleExampleSelection = (example) => {
    setSelectedExample(example);
  }

  const examples = [
    { value:'ordersProc', label:'SQL Procedure',imageUrl: '/assets/exampleImages/ordersProc.png' },
    { value:'randQuestionProc', label:'Random Question SQL Procedure',imageUrl: '/assets/exampleImages/randQuestionProc.png' },
    { value:'phpWide', label:'PHP',imageUrl: '/assets/exampleImages/phpWide.png' },
    { value:'cSharpWide', label:'C#',imageUrl: '/assets/exampleImages/cSharpWide.png' },
    { value:'restAPIWide', label:'Rest API',imageUrl: '/assets/exampleImages/restAPIWide.png' }
  ]

  const renderActivePage = () => {
    switch(activePage) {
      case 'about':
        return isMobile ? <MobileAbout /> : <DesktopAbout />
        //return <DesktopAbout />
      case 'resume':
        return <DesktopResume />
      case 'examples':
        return( 
        <div>
          <p style = {pDescriptionStyle}>
            These examples are code snippets of various projects that 
            show my contributions/work. This section is intended to 
            provide some insight of my coding ability/skills using 
            various languages. Unless I make a note saying otherwise, 
            everything included here is code that I originally wrote, 
            Click on the heading to display each example snippet.
          </p>
          <DesktopExamples          
            options={examples}
            onExampleSelected = {handleExampleSelection}          
           />
           </div>
        )
      case 'projects':
        return <DesktopProjects />
      case 'contact':
        return <DesktopContact />
      default:
        return <DesktopAbout />
    }
  };

  return (
    <div className="App">      
      <div style={topBarStyle}>
        <Nav onNavigate={handleNavigation}/>
        <SocialMedia />
      </div>
      <div className="pageContainer" style = {pageContainerStyle}>      
      {renderActivePage()}
    </div>
    </div>
  );
}

export default App;
