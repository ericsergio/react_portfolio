import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
import Nav from './components/Nav.js';
import SocialMedia from './components/SocialMedia.js';
import useWindowSize from './components/useWindowSize';
import './App.css';

import {   
  About,
  Resume,
  Examples,
  Projects,
  Contact,
} from './components';

import ordersProc from './assets/exampleImages/ordersProc.png';
import randQuestionProc from './assets/exampleImages/randQuestionProc.png';
import phpWide from './assets/exampleImages/phpWide.png';
import cSharpWide from './assets/exampleImages/cSharpWide.png';
import restAPIWide from './assets/exampleImages/restAPIWide.png';

function App() {
  const topBarStyle = {
    margin:'0',
    
  }

  const pageContainerStyle = {
    position:'relative',
    top:'1vh',
    left:'11vw',    
    minHeight:'70vh',
    height:'auto',
    width:'78vw',
    boxShadow:'0 30px 20px rgba(0, 0, 0, 0.7)',
    borderRadius:'0 12% 0 0',
    background:'radial-gradient(circle at 90% 5%, rgba(0, 0, 0, 1) 2%, transparent 95%) 90% 25%, \
    radial-gradient(circle at 55% 5%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, .7) 90%) 25% 5%, \
    radial-gradient(circle at 85% 55%, rgba(0, 0, 0, 0) 82%, rgba(0, 0, 0, .7) 90%) 5% 25%',
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
    { value:'ordersProc', label:'SQL Procedure',imageUrl: ordersProc },
    { value:'randQuestionProc', label:'Random Question SQL Procedure',imageUrl: randQuestionProc },
    { value:'phpWide', label:'PHP',imageUrl: phpWide },
    { value:'cSharpWide', label:'C#',imageUrl: cSharpWide },
    { value:'restAPIWide', label:'Rest API',imageUrl: restAPIWide }
  ]

  const renderActivePage = () => {
    switch(activePage) {
      case 'about':
        //return isMobile ? <MobileAbout /> : <DesktopAbout />
        return <About />
      case 'resume':
        //return isMobile ? <MobileResume /> : <DesktopResume />
        return <Resume />
      case 'examples':
        return( 
        <div>
          <Examples          
            options={examples}
            onExampleSelected = {handleExampleSelection}          
           />
           </div>
        )
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About />
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
