import Items from './components/items'
import myCss from './compose-component.module.css'

function ComposeComponent() {
  return (
    <section className={myCss.items} aria-label='Items'>
      <Items />
      <Items />
    </section>
  )
}

export default ComposeComponent
