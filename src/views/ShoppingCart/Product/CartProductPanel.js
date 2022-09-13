import React from 'react'

import { Accordion } from 'react-bootstrap';
import CartProductCategory from '../Category/CartProductCategory'
import ProductContainer from './ProductContainer';
function CartProductPanel(props) {
  var data = props.data;

  return (
    <>
      <div className="container">
        <div className="row row-cols-4" >
          {data.map((e, index) => {
            return (
              <ProductContainer key={index} products={e}></ProductContainer>
            )
          })
          }</div>
      </div>

    </>
  )
}

export default CartProductPanel