import React from 'react';

function CartProductCategory(props) {
  var CartCategories = props.data;

  const clickHandler = (event) => {
    props.GetCategory(event.target.id);
  }
  return (
    <>
      <div onClick={clickHandler} id={0}> {"All"}      </div>
      {CartCategories.map((a) => {
        return (
          <div key={a.CategoryId} onClick={clickHandler} id={a.CategoryId}> {a.categoryName}      </div>);
      })

      }
    </>
  )
}

export default CartProductCategory