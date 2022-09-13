import React from 'react'
import ProductCard from './ProductCard'


function ProductContainer(props) {
  var categoryProducts = props.products.categoryProducts;
  

  return (
    <>
      {categoryProducts.map((b, index) => {
        return (
          <ProductCard key={index} data={b} addItemToCart="addItemToCart"></ProductCard>
        )
      })}
    </>
  )
}

export default ProductContainer