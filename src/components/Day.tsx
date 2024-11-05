import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"
import { CalendarEvent } from "../types"

type DayProps = {
    day: dayjs.Dayjs
    i: number
}

type TooltipPosition = { top: number; left: number };

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

    const [hoveredEvent, setHoveredEvent] = useState<CalendarEvent | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ top: 0, left: 0 });

    // Función para mostrar el tooltip al pasar el mouse
    const handleMouseEnter = (event: CalendarEvent, e: React.MouseEvent) => {
        setHoveredEvent(event);
        setTooltipPosition({ top: e.clientY + 10, left: e.clientX + 10 });
    };

    // Función para ocultar el tooltip
    const handleMouseLeave = () => {
        setHoveredEvent(null);
    };

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
                    onMouseEnter={(e) => handleMouseEnter(evt, e)}
                    onMouseLeave={handleMouseLeave}
                    className={`${evt.label} p-1 text-sm rounded mb-1 truncate w-11/12 inline-block`}
                >
                    {evt.title}
                </div>
            ))}
        </div>
        {hoveredEvent && (
            <div
                style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
                className="absolute z-50 bg-white border border-gray-300 shadow-lg p-4 rounded-md w-60"
            >
                <h3 className="font-semibold text-lg">{hoveredEvent.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{hoveredEvent.description}</p>
                <p><strong>Hora de inicio:</strong> {hoveredEvent.startTime}</p>
                <p><strong>Hora de término:</strong> {hoveredEvent.endTime}</p>
                <p><strong>Integrantes:</strong> {hoveredEvent.users.join(", ")}</p>
                <p><strong>Ramo:</strong> {hoveredEvent.ramo}</p>
            </div>
        )}
    </div>
  )
}
