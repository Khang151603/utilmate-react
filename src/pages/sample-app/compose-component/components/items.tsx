import Button from './button'
import Text from './text'
import myCss from '../compose-component.module.css'

function Items() {
  return (
    <article className={myCss.item}>
      <h2 className={myCss.title}>
        <Text>No Items!</Text>
      </h2>
      <div className={myCss.actions}>
        <Button className={myCss.button}>Increment</Button>
      </div>
    </article>
  )
}

export default Items
