import Button from './button'
import Text from './text'
import type { Todo } from '../lifting-state-up'

interface TodoItemProps {
  todo: Todo
  onDelete: (id: number) => void
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  function handleDelete() { onDelete(todo.id) }

  return (
    <li>
      <Text>{todo.text}</Text>
      <Button onClick={handleDelete} type='button'>
        Delete
      </Button>
    </li>
  )
}
