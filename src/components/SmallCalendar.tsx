import { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../utils/util'
import GlobalContext from '../context/GlobalContext'
import React from 'react'

export default function SmallCalendar() {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])

    function handlePrevMonth() {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }

    function handleNextMonth() {
        setCurrentMonthIndex(currentMonthIndex + 1)
    }

    function getDayClass(day : dayjs.Dayjs) {
        const format = "DD-MM-YYYY"
        const nowDay = dayjs().format(format)
        const currentDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if (nowDay === currentDay) {
            return "bg-blue-600 rounded-full text-white";
        } else if (currentDay === slcDay) {
            return "bg-blue-200 rounded-full text-blue-600 font-bold";
        } else {
            return "hover:bg-gray-200 rounded-full transition-colors";
        }
    }
  return (
    <div className="mt-9">
        <header className="flex justify-between">
            <button onClick={() => handlePrevMonth()}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 hover:bg-gray-100 rounded transition-colors">
                    &lt;
                </span>
            </button>
            <p className="text-xl text-gray-500 font-bold w-40 text-center">
                {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
            </p>
            <button onClick={() => handleNextMonth()}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 hover:bg-gray-100 rounded transition-colors">
                &gt;
                </span>
            </button>
        </header>
        <div className="grid grid-cols-7 grid-rows-6">
            {currentMonth[0].map((day, i) => (
                <span key={i} className="text-center py-1">
                    {day.format('dd').charAt(0).toUpperCase()}
                </span>
            ))}
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, j) => (
                        <button 
                            key={j} 
                            onClick={() => {
                                setSmallCalendarMonth(currentMonthIndex);
                                setDaySelected(day)
                            }} 
                            className={`text-sm p-1 my-1 text-center ${getDayClass(day)}`}>
                            <span className="text-sm">{day.format('D')}</span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}
