import React from 'react'




export const ResumeControlBarButton = (props) => {
    const name = props.name;
    const click = props.onClick;
    const style1 = props.addStyle;

  return (
   
    <a  href={'#'} onClick={() => {styles.aRef.backgroundColor='black'}} style={{...styles.aRef, ...style1}}>{name}</a>
    
  )

}

const styles = {

    aRef: {
        display: 'block',
        fontSize: '2.4vh',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: '2vh',
        alighItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    
    container: {
        padding: '2vh',
        alighItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
}
