import { TextField } from '@mui/material';
import React, { useState, useRef } from 'react'


function getWindowDimensions() {
  const { innerWidth, innerHeight } = window;
  return(
    innerWidth, innerHeight
  )
}

function handleSubmit(){
  return true
}




export const Contact = () => {
  const [firstName, setfirstname] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNum, setPhone] = useState();


  const [onFirstName, setonFirstName] = useState(false);
  const [onLastName, setonLastName] = useState(false);
  const [onEmail, setonEmail] = useState(false);
  const [onPhone, setonPhone] = useState(false);
  const [onSubject, setonSubject] = useState(false);
  const [onContent, setonContent] = useState(false);

  const [onFocusFN, setonFocusFN] = useState(false);
  const [onFocusLN, setonFocusLN] = useState(false);
  const [onFocusEmail, setonFocusEmail] = useState(false);
  const [onFocusPhone, setonFocusPhone] = useState(false);
  const [onFocusSubject, setonFocusSubject] = useState(false);
  const [onFocusContent, setonFocusContent] = useState(false);


  const handleFNameChange = event => {
    setfirstname(event.target.value);
  }
  const handleLNameChange = event => {
    setLastName(event.target.value);
  }
  const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handlePhoneChange = event => {
    setPhone(event.target.value);
  }



  const changeBorderColorF = (e) => {
    setonFirstName(e);
  }
  const changeBorderColorL = (e) => {
    setonLastName(e);
  }
  const changeBorderColorE = (e) => {
    setonEmail(e);
  }
  const changeBorderColorP = (e) => {
    setonPhone(e);
  }
  const changeBorderColorS = (e) => {
    setonSubject(e);
  }
  const changeBorderColorC = (e) => {
    setonContent(e);
  }





  const onFocusChangeFN = (e) => {
    setonFocusFN(e);
  }
  const onFocusChangeLN = (e) => {
    setonFocusLN(e);
  }  
  
  const onFocusChangeEmail = (e) => {
    setonFocusEmail(e);
  }  

  const onFocusChangePhone = (e) => {
    setonFocusPhone(e);
  }

  const onFocusChangeSubject = (e) => {
    setonFocusSubject(e);
  }

  const onFocusChangeContent = (e) => {
    setonFocusContent(e);
  }
    
  




  return (
      <>
      <div style={styles.container}>
        <div style={styles.headLineContainer}>
          <p style={styles.headLine}>Contact Me</p>
        </div>
        <div style={styles.inputsGuide}>
          <form style={styles.inputsContainer} 
          spellCheck={true}
          
          onSubmit={() => handleSubmit()}>
           
            {/* <TextField id='firstName' 
                        label={'First Name'} 
                        required style={styles.inputsStyle}
                        
                        
                        
            /> */}
            <input type='text' 
                    name='FirstName'
                    placeholder='First Name'
                    required={true}
                    value={firstName}
                    onChange={(e) => handleFNameChange(e)}
                    style={{...styles.inputsStyle, 
                      border: onFirstName ? '1px solid black': '1px solid #E5E4E2',
                      backgroundColor: onFocusFN ? '#FAFFE8': 'white'
                    }}
                    onMouseEnter={() => changeBorderColorF(true)}
                    onMouseOut={() => changeBorderColorF(false)}
                    onFocus={() => onFocusChangeFN(true)}
                    onBlur={() => onFocusChangeFN(false)}
                    
                
            />

            
            <input type='text' 
                    name='LastName'
                    placeholder='Last Name'
                    required={true}
                    value={LastName} 
                    onChange={(e) => handleLNameChange(e)}
                    style={{...styles.inputsStyle, 
                      border: onLastName ? '1px solid black': '1px solid #E5E4E2',
                      backgroundColor: onFocusLN ? '#FAFFE8': 'white'
                    }}
                    onMouseEnter={() => changeBorderColorL(true)}
                    onMouseOut={() => changeBorderColorL(false)}
                    onFocus={() => onFocusChangeLN(true)}
                    onBlur={() => onFocusChangeLN(false)}
            />
         
          
            <input type='email' 
                    name='Email'
                    placeholder='Email'
                    required={true}
                    value={Email} 
                    onChange={(e) => handleEmailChange(e)}
                    style={{...styles.inputsStyle, 
                      border: onEmail ? '1px solid black': '1px solid #E5E4E2',
                      backgroundColor: onFocusEmail ? '#FAFFE8' : 'white',
                  }}
                    onMouseEnter={() => changeBorderColorE(true)}
                    onMouseOut={() => changeBorderColorE(false)}
                    onFocus={() => onFocusChangeEmail(true)}
                    onBlur={() => onFocusChangeEmail(false)}

            />
         
       
            <input type='tel'
                    name='Phone' 
                    placeholder='Phone Number'
                    value={PhoneNum} 
                    onChange={(e) => handlePhoneChange(e)}
                    style={{...styles.inputsStyle, 
                      border: onPhone ? '1px solid black': '1px solid #E5E4E2',
                      backgroundColor: onFocusPhone ? '#FAFFE8' : 'white'
                    }}
                    onMouseEnter={() => changeBorderColorP(true)}
                    onMouseOut={() => changeBorderColorP(false)}
                    onFocus={() => onFocusChangePhone(true)}
                    onBlur={() => onFocusChangePhone(false)}
            />
          
      
            <input type='text' 
                    name='Subject'
                    placeholder='Subject'
                    value={undefined} 
                    onChange={undefined}
                    style={{...styles.inputsStyle, 
                      border: onSubject ? '1px solid black': '1px solid #E5E4E2',
                      backgroundColor: onFocusSubject ? '#FAFFE8' : 'white'
                    }}
                    onMouseEnter={() => changeBorderColorS(true)}
                    onMouseOut={() => changeBorderColorS(false)}
                    onFocus={() => onFocusChangeSubject(true)}
                    onBlur={() => onFocusChangeSubject(false)}
            />
       
           
            <textarea
                    name='Content'
                    placeholder={'Write in 250 characters.'}
                    required={true}
                    rows={5}
                    cols={50}
                    maxLength={250}
                    value={undefined} 
                    onChange={undefined}
                    style={{...styles.inputTextareaStyle, 
                      border: onContent ? '1px solid black': '1px solid #E5E4E2',
                      backgroundColor: onFocusContent ? '#FAFFE8' : 'white',
                    }}
                    onMouseEnter={() => changeBorderColorC(true)}
                    onMouseOut={() => changeBorderColorC(false)}
                    onFocus={() => onFocusChangeContent(true)}
                    onBlur={() => onFocusChangeContent(false)}
            />
          
            <input style={styles.submitButton} type={'submit'} value='Send' />
          </form>
          <div style={{position: 'absolute', height:'5vh',width: '4vh'}}>

          </div>

          </div>
        </div>
      </>
    )
}

const styles = {
  container:{ 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%'
  },

  inputsGuide: {
    alignSelf: 'center',
    // marginLeft: '5%',
    // marginRight: '5%',
    alignItems: 'center',
    
  },

  inputsContainer:{
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid black',
    maxWidth: '800px',
    width: '50%',
    padding: '5vh',
    backgroundColor: '#C8D8E4',
  },

  inputsStyle: {
    height: '5vh',  
    outline: 'none',
    fontSize: '20px',
    marginTop: '3px',
  },

  inputTextareaStyle: {
    height: '9vh',
    width: '98.4%',
    outline: 'none',
    fontSize: '20px',
    resize: 'vertical',
    marginTop: '3px'
  },

  labelsStyle: {
    fontSize: '2vh',
  },

  headLineContainer: {
    // border: '1px solid black',
    // marginLeft: '5vh',
    // marginTop: '10vh',
    marginLeft: '6vw',
    alignSelf: 'center'
  },

  headLine: {
    fontSize: '4vh',
    fontWeight: 'bold'
  },

  submitButton: {
    marginTop: '10px',
    height: '5vh',
    minWidth: '200px',
    
    backgroundColor: '#52AB98',
    fontSize: '20px',
    // outline: 'none',
    border: '1px solid #52AB98',
    cursor: 'pointer',

    
  },


}
