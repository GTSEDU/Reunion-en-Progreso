import dayjs from 'dayjs';
import React from 'react';
import { CalendarEvent } from "../types"

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index : number) => {},
    smallCalendarMonth: null as number | null,
    setSmallCalendarMonth: (index : number | null) => {},
    daySelected: null as dayjs.Dayjs | null,
    setDaySelected: (day : dayjs.Dayjs | null) => {},
    showEventModal: false,
    setShowEventModal: (show : boolean) => {},
    dispatchCalEvent: (action : { type: 'push' | 'update' | 'delete', payload: CalendarEvent }) => {},
    savedEvents: [] as CalendarEvent[],
    selectedEvent: null as CalendarEvent | null,
    setSelectedEvent: (event : CalendarEvent | null) => {}
});

export default GlobalContext;