import './App.css';
import  {NavBar} from './components/navBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About } from './pages/about';
import { Resume } from './pages/resume';
import { Projects } from './pages/projects';
import { Footer } from './components/footer';
import { Contact } from './pages/contact';

export default function App() {

  const DateTime = new Date();


  return (
    <Router>
      <div style={styles.ParentContainer}>
        <div style={styles.NavBar}>
          <NavBar date={DateTime}/>
        </div>
        <div style={styles.scrollviewContainer}>
            <Routes>
              <Route exact path='/' element={<About/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/projects' element={<Projects/>} />
              {/* <Route path='/contact' element={<Contact/>} /> */}
            </Routes>
        </div>
        {/* <div>
        <Footer/>
        </div> */}
     
      </div>
    </Router>
  );
}




const styles = {
  Container:{
    display: "flex", 
    flexDirection: "column",

  },
 
  ParentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'relative',

  },

  NavBar: {
    display: 'flex',
    flexDirection: 'column', 
    position: 'fixed',
    width: '10%',
    minWidth: '145px',
    height: '100%',
    // backgroundColor: '#E5E4E2',
    borderRight: '2px solid white',
    zIndex: '1'
    // backgroundColor: 'lightyellow', 
    // borderColor: 'black',
    // borderWidth: '5', 
    // marginRight: '80%'
  },

  scrollviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    height: '94%',
    width: '87%',
    overflow: 'scroll',
    overflowY :'auto',
    overflowX:'auto',
    marginTop: '0.5%',
    marginBottom: '0.5%',
    marginLeft: '10.5%',
    marginRight: '0.5%',

    justifyContent: 'center',

    backgroundColor: 'white',

    padding:'2vh',
    // border: '2px solid blue',
    zIndex: '0'
  },

  ScrollView: {
    display: 'flex',
    flexDirection: 'row',

    border: '2px solid red',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },


}