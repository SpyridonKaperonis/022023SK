import React from 'react'
import { ParagraphAbout } from '../components/paragraphAbout'


import { LoadProfileImage } from '../components/loadImage'

import { NameHeadline } from '../components/nameHealine'

export const About = () => {

  const aboutParagraphs = {
    two: 'I have always been fascinated by the potential of machine learning to transform industries and improve peoples lives. This passion has driven me to pursue a career in software engineering, where I can use my skills and knowledge to develop and implement machine learning models and algorithms.',
    one: 'Hi there! My name is Spyridon and I am a software engineer with a passion for machine learning and a love for problem-solving and creating innovative solutions. In my free time, you can find me buried in a good book or hitting the gym to stay active.',
    three: 'Aside from my love for software and machine learning, I am also an avid reader and enjoy delving into a wide range of books, from science fiction to non-fiction. Reading allows me to expand my knowledge and gain new perspectives, which I believe is crucial for personal growth and success.',
    four:'In addition to my intellectual pursuits, I also value the importance of staying physically fit. I enjoy participating in a variety of sports and activities, such as running, cycling, and weightlifting. Not only does it keep me healthy and energized, but it also helps me to stay focused and clear-minded.',
    five:' Overall, I am a driven and motivated individual with a strong passion for software engineering and machine learning. I am excited to bring my skills and enthusiasm to a dynamic team and make a positive impact through my work.',
  }


  return (

  
    <div>
      <div style={styles.container}>
        <NameHeadline name={'Spyrion Kaperonis'} />
        <LoadProfileImage style={styles.image} alt='Spyridon Kaperonis'/>
        
        </div>
        <div>
          <ParagraphAbout text={aboutParagraphs.one}/>
        
          <ParagraphAbout text={aboutParagraphs.two}/>
          
          <ParagraphAbout text={aboutParagraphs.three}/>

          <ParagraphAbout text={aboutParagraphs.four}/>

          <ParagraphAbout text={aboutParagraphs.five}/>
          
        </div>
      </div>
 
  )
}

const styles = {

  container: {
    displaye: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: '400px',
    height: '400px',
    borderRadius: '200px'
  }
}