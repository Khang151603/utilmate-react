import Button from '../../../../components/ui/button'
import type { Product } from '../../prop-drilling'

interface ProductItemProps {
  product: Product,
  handleDeleteProduct: (productId: number) => void
}

function ProductItem({ product, handleDeleteProduct }: ProductItemProps) {
  return (
    <li>
      Title: {product.title}
      <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
    </li>
  )
}

export default ProductItem