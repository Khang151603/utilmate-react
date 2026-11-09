import { useRef, useState } from 'react'
import TodoForm from './components/todo-form'
import TodoCount from './components/todo-count'
import TodoList from './components/todo-list'

export interface Todo {
  id: number
  text: string
}

export default function LiftingStateUp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const nextTodoId = useRef(0)

  function addTodo(text: string) {
    nextTodoId.current += 1
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: nextTodoId.current, text },
    ])
  }

  function deleteTodo(id: number) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  return (
    <section>
      <h1>LiftingStateUp</h1>
      <TodoForm onAdd={addTodo} />
      <TodoCount count={todos.length} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </section>
  )
}
