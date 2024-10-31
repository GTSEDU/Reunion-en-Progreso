import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import dayjs from "dayjs"
import "dayjs/locale/es"; // Importa el idioma español

dayjs.locale("es");

export default function CalendarHeader() {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1)
  }

  function handleResetMonth() {
    setMonthIndex( monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month() )
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendario</h1>
      <button onClick={() => handleResetMonth()} className="border rounded py-2 px-4 mr-5 hover:bg-gray-100 cursor-pointer transition-colors">
        Hoy
      </button>
      <button onClick={() => handlePrevMonth()}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 hover:bg-gray-100 rounded transition-colors">
          &lt;
        </span>
      </button>
      <h2 className="text-xl text-gray-500 font-bold w-40 text-center">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={() => handleNextMonth()}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 hover:bg-gray-100 rounded transition-colors">
          &gt;
        </span>
      </button>
    </header>
  )
}
