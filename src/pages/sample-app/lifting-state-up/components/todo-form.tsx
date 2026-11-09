import { useState, type FormEvent } from 'react'
import Button from './button'

interface TodoFormProps {
  onAdd: (text: string) => void
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    onAdd(trimmedText)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New todo
        <input
          onChange={(event) => setText(event.target.value)}
          placeholder='Enter a todo'
          value={text}
        />
      </label>
      <Button type='submit'>Add Todo</Button>
    </form>
  )
}
