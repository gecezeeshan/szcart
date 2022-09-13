import React from 'react';

function CartProductCategory(props) {
  var category = props.category;
  //console.log(category);
  return (
    <>    
    
    {categoryProducts.map((b,index) => {
        return (
          <ProductCard key={index} data={b}></ProductCard>
        )
      })}


    </>
  )
}

export default CartProductCategory