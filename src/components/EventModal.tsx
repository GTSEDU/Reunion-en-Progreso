import { useState, useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import { CalendarEvent } from "../types"
import { usuarios } from "../data/usuarios"
import { ramos } from "../data/ramos"
import Select from "react-select"

const labelsClasses = ["bg-indigo-500", "bg-red-500", "bg-yellow-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-gray-500"]

export default function EventModal() {

    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '')
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '')
    const [selectedlabel, setSelectedLabel] = useState(selectedEvent ? selectedEvent.label : labelsClasses[0])
    const [startTime, setStartTime] = useState(selectedEvent ? selectedEvent.startTime : '');
    const [endTime, setEndTime] = useState(selectedEvent ? selectedEvent.endTime : '');
    const [selectedUsers, setSelectedUsers] = useState<{ label: string; value: string }[]>([]);
    const [selectedRamo, setSelectedRamo] = useState<{ label: string; value: string } | null>(null);
    const [error, setError] = useState('');

    const userOptions = usuarios.map(user => ({
        label: user.name,
        value: user.id.toString()
    }));

    const ramoOptions = ramos.map(ramo => ({
        label: ramo.name,
        value: ramo.id.toString()
    }));

    function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            setError("Por favor, complete todos los campos requeridos.");
            return;
        } else if (!startTime || !endTime) {
            setError("Por favor, ingrese la hora de inicio y fin.");
            return;
        } else if (!selectedUsers.length) {
            setError("Por favor, seleccione al menos un usuario.");
            return;
        } else if (!selectedRamo) {
            setError("Por favor, seleccione un ramo.");
            return;
        } else if (startTime >= endTime) {
            setError("La hora de inicio debe ser anterior a la hora de fin.");
            return;
        } else {
            setError('');
        }


        const calendarEvent: CalendarEvent = {
            id: selectedEvent ? selectedEvent.id : Date.now(),
            title,
            description,
            label: selectedlabel,
            day: daySelected?.valueOf(),
            startTime,
            endTime,
            users: selectedUsers.map(user => user.label),
            ramo: selectedRamo ? selectedRamo.label : null
        };

        if (selectedEvent) {
            dispatchCalEvent({ type: 'update', payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: 'push', payload: calendarEvent });
        }
        setShowEventModal(false);
    }

    function handleUserSelect(selectedOptions: any) {
        setSelectedUsers(selectedOptions || []);
    }

    function handleRamoSelect(selectedOption: any) {
        setSelectedRamo(selectedOption);
    }

  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
        <form className="bg-white rounded-lg shadow-2xl w-1/5">
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <span className="material-icons-outlined text-gray-400 hover:text-blue-600 cursor-pointer transition-colors">
                    drag_handle
                </span>
                <div>
                    {selectedEvent && (
                        <span 
                            onClick={() => {
                                dispatchCalEvent({ type: 'delete', payload: selectedEvent })
                                setShowEventModal(false)
                            }}
                            className="material-icons-outlined text-gray-400 hover:text-red-600 cursor-pointer transition-colors"
                        >
                            delete
                        </span>
                    )}
                    <button onClick={() => setShowEventModal(false)}>
                        <span className="material-icons-outlined text-gray-400 hover:text-red-600 cursor-pointer transition-colors">
                            close
                        </span>
                    </button>
                </div>
            </header>
            <div className="p-3">
                <div className="grid grid-cols-5 items-end gap-y-7 gap-x-1">
                    <div></div>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Añadir título" 
                        value={title} 
                        required
                        className="col-span-4 pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-o focus:border-blue-500"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span className="material-icons-outlined text-gray-400">
                        calendar_today
                    </span>
                    <p className="col-span-4">{daySelected?.format("dddd DD, MMMM")}</p>

                    <span className="material-icons-outlined text-gray-400">
                            schedule
                    </span>
                    <input 
                        type="time" 
                        name="startTime" 
                        value={startTime} 
                        required
                        className="col-span-4 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-o focus:border-blue-500"
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                        
                    <span className="material-icons-outlined text-gray-400">
                        schedule
                    </span>
                    <input 
                        type="time" 
                        name="endTime" 
                        value={endTime} 
                        required
                        className="col-span-4 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-o focus:border-blue-500"
                        onChange={(e) => setEndTime(e.target.value)}
                    />

                    <span className="material-icons-outlined text-gray-400">group</span>
                    <div className="col-span-4">
                        <Select
                            options={userOptions}
                            isMulti
                            value={selectedUsers}
                            onChange={handleUserSelect}
                            className="w-full"
                            placeholder="Selecciona usuarios..."
                        />
                    </div>

                    <span className="material-icons-outlined text-gray-400">book</span>
                    <div className="col-span-4">
                        <Select
                            options={ramoOptions}
                            value={selectedRamo}
                            onChange={handleRamoSelect}
                            className="w-full"
                            placeholder="Selecciona un ramo..."
                        />
                    </div>

                    <span className="material-icons-outlined text-gray-400">
                        segment
                    </span>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Añadir descripción" 
                        value={description} 
                        required
                        className="col-span-4 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-o focus:border-blue-500"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <span className="material-icons-outlined text-gray-400">
                        bookmark_border
                    </span>
                    <div className="col-span-4 flex gap-x-2">
                        {labelsClasses.map((label, i) => (
                            <span 
                                key={i}
                                onClick={() => setSelectedLabel(label)}
                                className={`${label} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                            >
                                {selectedlabel === label ? 
                                    <span className="material-icons-outlined text-white text-sm">check</span>
                                :
                                    <span className="material-icons-outlined text-white text-sm opacity-0 hover:opacity-100 transition-opacity">check</span>
                                }
                            </span>
                        ))}
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <footer className="flex justify-end border-t p-3 mt-5">
                <button 
                    type="submit" 
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                >
                        Guardar
                </button>
            </footer>
        </form>
    </div>
  )
}
