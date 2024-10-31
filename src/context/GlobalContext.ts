import dayjs from 'dayjs';
import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index : number) => {},
    smallCalendarMonth: null as number | null,
    setSmallCalendarMonth: (index : number | null) => {},
    daySelected: null as dayjs.Dayjs | null,
    setDaySelected: (day : dayjs.Dayjs | null) => {}
});

export default GlobalContext;