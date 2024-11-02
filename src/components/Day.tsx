import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"
import { CalendarEvent } from "../types"
import { set } from "react-hook-form"

type DayProps = {
    day: dayjs.Dayjs
    i: number
}

export default function Day({ day, i } : DayProps) {

    function getCurrentDayClass() {
        return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? "bg-blue-600 text-white rounded-full w-7" : ""
    }

    const [dayEvents, setDayEvents] = useState<CalendarEvent[]>([])
    const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } = useContext(GlobalContext)

    useEffect(() => {
        const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
        setDayEvents(events)
    }, [savedEvents, day])

  return (
    <div className="border border-gray-200 flex flex-col hover:border-blue-600 transition-colors">
        <header className="flex flex-col items-center">
            {i === 0 && (
                <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
            )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
        <div className="flex-1 cursor-pointer text-center" onClick={() => {
            setDaySelected(day)
            setShowEventModal(true)
        }}>
            {dayEvents.map((evt, i) => (
                <div 
                    key={i}
                    onClick={() => setSelectedEvent(evt)}
                    className={`${evt.label} p-1 text-sm rounded mb-1 truncate w-11/12 inline-block`}
                >
                    {evt.title}
                </div>
            ))}
        </div>
    </div>
  )
}
