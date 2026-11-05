
import React from 'react'
import { getRandomColor } from '../../../utils/getRandomColor'
import BoxItem from './components/box-item'
import styles from './generate-box.module.css'


interface IBox {
  id: number
  title: string
  bgColor: string
}

function GenerateBox() {

 const [numberOfBoxes, setNumberOfBoxes] = React.useState('0')

 const [boxes, setBoxes] = React.useState<IBox[]>([])


  function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfBoxes(event.target.value)
  }

  function handleGenerate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!event.currentTarget.reportValidity()) {
      return
    }

    const count = Number(numberOfBoxes)

    const newBoxes = Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      title: `Box #${index + 1}`,
      bgColor: 'antiquewhite',
    }))

    setBoxes(newBoxes)
  }

  function handleToggleBox(id: number) {
    setBoxes((currentBoxes) =>
      currentBoxes.map((box) => {
        if (box.id === id) {
          return {
            ...box,
            bgColor: getRandomColor(),
          }
        }

        return box
      }),
    )
  }


  return (
    <section className={styles.container}>

      <h1 className={styles.heading}>
        Sample App - GenerateBox
      </h1>

      <form className={styles.form} onSubmit={handleGenerate}>

        <label htmlFor="number-of-boxes">
          Number of boxes
        </label>

        <input
          id="number-of-boxes"
          name="numberOfBoxes"
          type="number"
          min="0"
          max="128"
          step="1"
          required
          value={numberOfBoxes}
          onChange={handleNumberChange}
        />

        <button type="submit">
          Generate
        </button>

      </form>


      {boxes.length === 0 ? (

        <p className={styles.emptyMessage}>
          No Box
        </p>

      ) : (

        <div className={styles.boxGrid}>

          {boxes.map((box) => (
            <BoxItem
              key={box.id}
              title={box.title}
              bgColor={box.bgColor}
              onClick={() => handleToggleBox(box.id)}
            />
          ))}

        </div>

      )}

    </section>
  )
}

export default GenerateBox
