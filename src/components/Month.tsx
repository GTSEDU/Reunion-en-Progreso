import dayjs from "dayjs"
import Day from './Day'

type MonthProps = {
  currentMonth: dayjs.Dayjs[][]
}

export default function Month({ currentMonth } : MonthProps) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {currentMonth.map((row, i) => (
        <>
          {row.map((day, idx) => (
            <Day
              key={idx}
              day={day}
              i={i}
            />
          ))}
        </>
      ))}
    </div>
  )
}
