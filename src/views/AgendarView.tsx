import { useState, useContext, useEffect } from 'react'
import { getMonth } from '../utils/util'
import CalendarHeader from '../components/CalendarHeader'
import Sidebar from '../components/Sidebar'
import Month from '../components/Month'
import GlobalContext from '../context/GlobalContext'
import EventModal from '../components/EventModal'

export default function AgendarView() {

  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month 
            currentMonth={currentMonth}
          />
        </div>
      </div>
    </>
  )
}
