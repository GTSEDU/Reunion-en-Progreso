import dayjs from 'dayjs';
import React from 'react';
import { CalendarEvent } from "../types"

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (_index : number) => {},
    smallCalendarMonth: null as number | null,
    setSmallCalendarMonth: (_index : number | null) => {},
    daySelected: null as dayjs.Dayjs | null,
    setDaySelected: (_day : dayjs.Dayjs | null) => {},
    showEventModal: false,
    setShowEventModal: (_show : boolean) => {},
    dispatchCalEvent: (_action : { type: 'push' | 'update' | 'delete', payload: CalendarEvent }) => {},
    savedEvents: [] as CalendarEvent[],
    selectedEvent: null as CalendarEvent | null,
    setSelectedEvent: (_event : CalendarEvent | null) => {}
});

export default GlobalContext;