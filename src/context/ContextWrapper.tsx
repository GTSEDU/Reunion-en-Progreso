import { useState, useEffect, useReducer } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
import { CalendarEvent } from "../types"
import { reuniones } from '../data/reuniones'

type Action = {
  type: 'push' | 'update' | 'delete';
  payload: CalendarEvent;
}

function savedEventsReducer(state: CalendarEvent[], { type, payload }: Action): CalendarEvent[] {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map(evt => evt.id === payload.id ? payload : evt);
    case 'delete':
      return state.filter(evt => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const savedEvents = localStorage.getItem("savedEvents");
  if (savedEvents) {
    return JSON.parse(savedEvents); // Cargar desde localStorage si existe
  }
  return reuniones; // Si no, cargar datos de prueba
}

export default function ContextWrapper(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState<number | null>(null)
    const [daySelected, setDaySelected] = useState<dayjs.Dayjs | null>(dayjs())
    const [showEventModal, setShowEventModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents)

    useEffect(() => {
      localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
    }, [savedEvents])

    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth)
      }
    }, [smallCalendarMonth])

    useEffect(() => {
      if (!showEventModal) {
        setSelectedEvent(null)
      }
    }, [showEventModal])

  return (
    <GlobalContext.Provider 
      value={{
        monthIndex, 
        setMonthIndex, 
        smallCalendarMonth, 
        setSmallCalendarMonth, 
        daySelected, 
        setDaySelected, 
        showEventModal, 
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
