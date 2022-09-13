import React from 'react'
//import { Button } from 'react-bootstrap';

import classes from './Cart.module.css';

import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { checkoutActions } from '../../../Store/index';
import { Link } from 'react-router-dom';
function ProductCard(props) {

  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(checkoutActions.AddItem(event.target.id));
    //props.addItemToCart(event.target.id);
  }
  return (
    <div >
      {/* <Card className="card-stats">
        <Card.Body>
          <Card.Title>{props.data.Id}{props.data.name}</Card.Title>
          <Card.Text>
            <span className='ellipseText' style={{ margin: 'auto' }}>    {props.data.description}</span>
            <span className={'strike'}>${parseFloat(props.data.price) + 10} </span>
            ${props.data.price}
          </Card.Text>
         
         

        </Card.Body>
      </Card> */}

      <Card className={`${classes.Card}`}   >
        <Card.Header>
          <Card.Title as="h4"></Card.Title>
          <Link to={`/admin/ProductDetail/` + props.data.Id} >
            <p className="card-category">{props.data.name}</p></Link>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span className={`${classes.ellipseText}`} style={{ margin: 'auto' }}>    {props.data.description}</span>
            <span className={classes.strike}>${(parseFloat(props.data.price) + 10).toFixed(2)} </span><br></br>
            ${props.data.price}
          </Card.Text>

        </Card.Body>
        <Card.Footer>
          <div className="stats">
            <a href='#' onClick={clickHandler} id={props.data.Id}>Add to cart</a>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ProductCard