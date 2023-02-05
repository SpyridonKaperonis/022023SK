import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export const GitHubLinkedInBtn = () => {

    const [GisOn, setGIsOn] = useState(false);
    const [LisOn, setLIsOn] = useState(false);
    const navigate = useNavigate();

    const navigateToGitHub = () => {
        window.open('https://github.com/SpyridonKaperonis')
    }
    const navigateToLinkedIn = () => {
        window.open('https://www.linkedin.com')
    }

    
  return (
    <>
       
        <BsGithub size={'70px'} style={{...styles.GIcon, backgroundColor: GisOn ? '#333' : ''}} onClick={ () => navigateToGitHub()}
        onMouseOver={() => setGIsOn(true)} onMouseOut={() => setGIsOn(false)}
        
        
        />
        
      
        <BsLinkedin size={'70px'} style={{...styles.LIcon, backgroundColor: LisOn ? '#0072B1' : ''}} onClick={() => navigateToLinkedIn()}
        onMouseOver={() => setLIsOn(true)} onMouseOut={() => setLIsOn(false)}
        />

    </>
  )
};


const styles = {
    GIcon: {
        padding: '13%',
        cursor: 'pointer',
        color: 'white'
      
    },
    LIcon: {
        padding: '13%',
        cursor: 'pointer',
        color: 'white',
  
    },
}