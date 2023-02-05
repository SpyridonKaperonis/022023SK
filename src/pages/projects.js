import React from 'react'
import { GithubCard } from '../components/githubCard'


import tree from '../images/treeSplitData.png'
import roadExtraction from '../images/valData_prediction.png'
import hand from '../images/image14.png'

export const Projects = () => {
  return (
    <>
    <div>
      <div>
        <h1 style={{marginLeft: '3vh'}}>Most Recent</h1>
      </div>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
            <GithubCard 
              title={'Sign Language Recognition'} 
              text={<p>Develops three different machine learning algorithms
                to recognize sign language letters.  
                <li>Convolution Neural Network</li>
                <li>Support Vector Machine</li>
                <lI>k-Nearest Neighbors</lI>
              </p>}
              image={hand}
              image_={true}
              link={'https://github.com/SpyridonKaperonis/SignLanguageRecognition'}
              />
            </div>
        <div style={styles.card}> 
            <GithubCard
              title={'English Proficiency Estimation'}
              text={<p>Grade students learning English as a second language. 
                Developed three different algorithms to grade essays in terms of cohesion,
                syntax, vocabulary, phraseology, grammar, and conventions. 
                <li>LSTM</li>
                <li>Neural Network</li>
                <li>Support Vector Machine</li></p>}
              image={tree}
              image_={true}
              link={'https://github.com/SpyridonKaperonis/EnglishLanguageLearning'}
              />
        </div>
        <div style={styles.card}> 
            <GithubCard
              title={'Satellite Road Extraction'}
              text={<p>Using deep learning algorithm to recognize roads on satellite imagery.
                <li>Auto Encoder</li>
              </p>}
              image={roadExtraction}
              image_={true}
              link={'https://github.com/SpyridonKaperonis/SatelliteRoadExtraction'}
              />
        </div>
      </div>
      <div style={styles.card}> 
          <GithubCard
            title={'Textbook Service System'}
            text={'Description'}
            image_={false}
            link={'https://github.com/SpyridonKaperonis/TextBookServices'}
            />
            
      </div>
      <div style={styles.card}>
        <GithubCard
          title={'tennis Social Network'}
          text={'Description'}
          image_={false}

          />
      </div>
    </div>
    </>
  )
}

const styles = {
  cardsContainer:{
    display: 'flex', 
    flexDirection: 'row', 
  }, 

  card:{
    display: 'flex', 
    flexDirection: 'column', 
    margin: '1vh',
    padding: '0.5vh',
    backgroundColor: '#C8D8E4'
  }, 


}
