import { useRecoilState } from 'recoil'
import { filterState } from '../atoms/todoAtom'

export default function TodoFilter() {
  const [filter, setFilter] = useRecoilState(filterState)

  return (
    <div style={{ margin: '10px 0' }}>
      <button
        onClick={() => setFilter('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        Todas
      </button>

      <button
        onClick={() => setFilter('pending')}
        style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal' }}
      >
        Pendentes
      </button>

      <button
        onClick={() => setFilter('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
      >
        Concluídas
      </button>
    </div>
  )
}