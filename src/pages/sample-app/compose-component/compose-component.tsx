import ProductItem from './components/product-item'
import myCss from './compose-component.module.css'

function ComposeComponent() {
  return (
    <section className={myCss.products} aria-label='Items'>
      <ProductItem />
      <ProductItem />
    </section>
  )
}

export default ComposeComponent
