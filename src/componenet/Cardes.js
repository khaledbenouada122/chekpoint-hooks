import React, { startTransition } from 'react'
import {Card, ListGroup}from 'react-bootstrap';
import {Start} from './Start'
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component'


const Cardes = ({elm}) => {
  return (
    <div class="cadres" >
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elm. posteURL} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>{elm.title}</Card.Title>
        <Card.Text style={{color:"black"}}>{elm.description} </Card.Text>
        <Card.Text >
        <StarRatingComponent
        name="Start"/* name of the radio input, it is required */
         value={elm.rating} /* number of selected icon (`0` - none, `1` - first) */>
        </StarRatingComponent>
       
          </Card.Text>      
       
     
         
       
      </Card.Body>
     
      
    </Card>
    </div>
  )
}

export default Cardes
