import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../selectors/filteredTodos'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState)

  return (
    <div>
      {todos.length === 0 && <p>Nenhuma tarefa ainda</p>}

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}