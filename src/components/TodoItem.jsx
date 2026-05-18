import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState)

  function toggle() {
    setTodos(
      todos.map((t) =>
        t.id === todo.id
          ? { ...t, completed: !t.completed }
          : t
      )
    )
  }

  function remove() {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  return (
    <div
      style={{
        marginTop: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>

      <div>
        <button onClick={toggle}>
          {todo.completed ? 'Desfazer' : 'Concluir'}
        </button>

        <button onClick={remove} style={{ marginLeft: '5px' }}>
          Remover
        </button>
      </div>
    </div>
  )
}