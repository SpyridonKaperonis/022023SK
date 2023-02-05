// import { styles } from '../pages/styles';
import { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';
import { GitHubLinkedInBtn } from './gitHubLinkedInBtn';

function formater(date){
    console.log('Two')
    const dateSplit = date.split(" ");
    console.log('Splitted Date: ', dateSplit)

    const year = dateSplit[3];
    const day = dateSplit[0];
    const dayNum = dateSplit[2];
    const month = dateSplit[1];


    return {
        day: day,
        dayNum: dayNum,
        year: year,
        month: month,
    }
}

export const NavBar = (props) => {

    const original_date = props.date.toString()
    console.log('One')
    const newDate = formater(original_date)
  
    // let [over, setOver] = useState(false);

    // if(over){
    //     styles.GLIcons.backgroundColor='red';
    //     console.log('OVER')
    // }
    // else {
    //     styles.GLIcons.backgroundColor='';
    //     console.log('OUT')
    // }


  return (

    <div style={styles.Container}>

        <div style={styles.dateContainer}>
            <h3 style={styles.dateSpace}>{newDate.dayNum}</h3>
            <h3 style={styles.dateSpace}>{newDate.day}</h3>
            <h3 style={styles.dateSpace}>{newDate.month}</h3>
            <h3 style={styles.dateSpace}>{newDate.year}</h3>
        </div>

        <div style={styles.buttonsContainer}>
            <nav>
               
                <Link 
                    to={'/'}
                    style={useLocation().pathname==='/' ? styles.sideBarButtonClicked : styles.sideBarButton}>About Me</Link>

                <Link 
                    to={'/resume'} 
                    style={useLocation().pathname==='/resume' ? styles.sideBarButtonClicked : styles.sideBarButton}>Resume</Link>
            
                <Link 
                    to={'/projects'} 
                    style={useLocation().pathname==='/projects' ? styles.sideBarButtonClicked : styles.sideBarButton}>Projects</Link>
                
                {/* <Link 
                    to={'/contact'} 
                    style={useLocation().pathname==='/contact' ? styles.sideBarButtonClicked : styles.sideBarButton}>Contact</Link> */}
            
            </nav>
        </div>

        <div style={styles.linkedInGitContainer}>
            <GitHubLinkedInBtn />
        </div>

    </div>
  );
};

const styles = {
    Container: {
        display: "flex", 
        flexDirection: "column",
        height: '100%',
    
        borderWidth: '4px',
        borderColor: 'black',
        justifyContent: 'space-between',
        backgroundColor: '#2B6777'
    },

    dateContainer:{
        display: 'flex',
        flexDirection: 'row',
   
        justifyContent: 'center',
        margin: '1vh',
        fontSize: '20px',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

    dateSpace: {
        padding: '3px',
        fontSize: '90%'
    },   

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },

    sideBarButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '3vh',
        marginTop: '1.5vh',
        // backgroundColor: '#C8D8E4',
        fontWeight: 'bold',
        backgroundColor: '#52AB98',
        fontSize: '110%',
        color: '#FFFFFF',
        textDecoration: 'none'
    },

    sideBarButtonClicked: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '3vh',
        marginTop: '1.5vh',
        backgroundColor: '#C8D8E4',
    
        fontWeight: 'bold',
        fontSize: '115%',
        color: 'black',
        textDecoration: 'none'
    },

    linkedInGitContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
       
    },

    GLIcons: {
        padding: '3.4vh',
        border: '1px solid black',
    },

}


