import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoForm() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useRecoilState(todoListState)

  function addTodo() {
    if (!text.trim()) return

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTodos((old) => [...old, newTodo])
    setText('')
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
      />

      <button onClick={addTodo}>
        Adicionar
      </button>
    </div>
  )
}