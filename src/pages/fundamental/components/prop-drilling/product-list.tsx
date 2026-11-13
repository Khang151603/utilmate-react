import type { Product } from '../../prop-drilling'
import ProductItem from './product-item'

interface ProductListProps {
  products: Product[],
  handleDeleteProduct: (productId: number) => void
}

function ProductList({ products, handleDeleteProduct }: ProductListProps) {
  return (
    <ul>
      {products.map(product => (
        <ProductItem 
          key={product.id}
          product={product} 
          handleDeleteProduct={handleDeleteProduct}
        />
      ))}
      
    </ul>
  )
}

export default ProductList