import React from "react";
import clsx from 'clsx';
/*
&& 
'tony' && 'khang' -> 'Khang'
'tony' && '' -> ? ' '
'' && 'khang' -> ' '
'tony' && 'khang' && 'react' -> 'react'

||: lấy giá trị mà nó gặp true đầu tiên
'tony' || 'truong' ->  'tony'
' ' || 'tony' || 'khang' -> 'tony 

string[] -> ['abc', 'aa', 'bbb']
number[] -> [12, 341, 412]
objec[] -> [{ ... }, { ... }]
*/

import myCss from './contitional.module.css';

interface IProduct {
  id: number,
  title: string
}

function ConditionalRendering() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  function handleAddProduct() {
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      title: 'Iphone' + Date.now(),
    }
    // setProducts((prevState) => {
    //   return [...prevState, newProduct]
    // })
    setProducts((prevState) => [...prevState, newProduct])
  }

  const results = products.map(product => {
    return {
      ...product,
      id: Math.floor(Math.random() * 1000),
    }
  })
  console.log('results: ', results)
  
  const myStyles = {
    fontSize: 20
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>
      <button type="button" onClick={handleAddProduct}>Add Product</button>
      {/* {products.length === 0 && (
        <div>added product</div>
      )} */}

      {products.length > 0 ? (
        <>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              style={myStyles} 
              className={clsx(
                'box text-white bg-brand box-border border border-transparent',
                myCss.product,
                index % 2 == 0 ? 'odd' : 'even'
              )}
              // className={`box text-white bg-brand box-border border border-transparent ${myCss.product} ${index % 2 == 0 ? 'odd' : 'even'}`}
            >
              Title: {product.title}
            </div>
          ))}
        </>
      ) : ( 
        <div>Please add product</div>
      )}
    </div>
  )
}

export default ConditionalRendering