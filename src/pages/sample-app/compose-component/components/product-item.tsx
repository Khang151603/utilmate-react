import Button from './button'
import Text from './text'
import myCss from './product-item.module.css'

function ProductItem() {
  return (
    <article className={myCss.productItemArticle}>
      <h2 className={myCss.productItemTitle}>
        <Text>No Items!</Text>
      </h2>
      <div className={myCss.productItemActions}>
        <Button className={myCss.productItemButton}>Increment</Button>
      </div>
    </article>
  )
}

export default ProductItem
