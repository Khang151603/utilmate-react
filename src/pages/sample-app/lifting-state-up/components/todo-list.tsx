import type { Todo } from '../lifting-state-up'
import TodoItem from './todo-item'

interface TodoListProps {
  todos: Todo[]
  onDelete: (id: number) => void
}

export default function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}
