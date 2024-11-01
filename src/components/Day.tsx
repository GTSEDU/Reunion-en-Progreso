import dayjs from "dayjs"

type DayProps = {
    day: dayjs.Dayjs
    i: number
}

export default function Day({ day, i } : DayProps) {

    function getCurrentDayClass() {
        return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? "bg-blue-600 text-white rounded-full w-7" : ""
    }

  return (
    <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
            {i === 0 && (
                <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
            )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
    </div>
  )
}
