import { style } from '@mui/system';
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const GithubCard = (props) => {
    const image = props.image;
    const title = props.title;
    const text = props.text;
    const hyperlink = props.link;
    const image_ = props.image_;

    const [clicked, setClicked] = useState(false);


    const navigateToRepo = (e) => {
      window.open(e);
      setClicked(true)
      setTimeout(() => {
        setClicked(false);
      }, 500)
  }

  return (
    <div style={styles.container} onClick={() => navigateToRepo(hyperlink)}>
    <Card style={{display: 'flex', flexDirection: 'column', 
                  justifyContent: 'space-between',  border: clicked ? '1px solid black' : ''}}>
      {image_ ?  <Card.Img style={{height: '20vh', width: '1oo%'}} variant="top" src={image} /> : null}
      <Card.Body>
        <Card.Title style={{margin: '1vh', fontWeight: 'bold', fontSize:'25px'}}>{title}</Card.Title>
        <Card.Text style={{margin: '2vh', fontSize: '18px'}}>
          {text}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

const styles = {
  container: {
    cursor: 'pointer'
  }
}
