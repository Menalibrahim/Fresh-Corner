//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Button } from "rsuite";
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia'; 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




// Import the default CSS
import "rsuite/dist/rsuite.min.css";

function Cards(props) {

  const [headingText, setHeadingText]= useState("");

  function handleClick(event){
    setHeadingText("Added");
  
    event.preventDefault();
  }

  return (
    <div className='cards'>
    <Card style={{ width: '18rem' }}>
     { /*<Card.Img className='img' variant="top" src="images/fruits.png" />*/}
     <h3 className='header'>{headingText}</h3>
     
     <CardMedia
          component="img"
          height="150"
          src={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='title'>
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='text'>
          {props.text}
          </Typography>
        </CardContent>
        <Button color="orange" size="small" appearance="primary"className='btn' onClick={handleClick}>
          Add To Cart
        </Button>
    </Card>
    </div>
  );
}

export default Cards;