import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {

  const { setShowEventModal } = useContext(GlobalContext)

  return (
    <button onClick={() => setShowEventModal(true)} className="border py-2 rounded-full flex items-center shadow-md hover:shadow-sm">
        <span className="pl-3 pr-7">Crear Reunión</span>
    </button>
  )
}
