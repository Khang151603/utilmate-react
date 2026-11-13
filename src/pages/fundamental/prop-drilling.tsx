import React from 'react'
import ProductList from './components/prop-drilling/product-list'
import Button from '../../components/ui/button';

export interface Product {
  id: number,
  title: string
}

function DropDrilling() {
  const [products, setProducts] = React.useState<Product[]>([])

  function addProduct() {
    const newProduct = {
      id: Date.now(),
      title: 'Khang' + Date.now()
    };
    setProducts(prevState => [...prevState, newProduct])
  }

  function handleDeleteProduct(productId: number) {
    setProducts(prevState => prevState.filter(product => product.id !== productId))
  }

  return (
    <div>
      <h1>DropDrilling</h1>

      <Button type="button" onClick={addProduct}>Add Product</Button>

      <ProductList 
        products={products}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  )
}

export default DropDrilling