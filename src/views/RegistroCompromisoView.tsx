import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Integrante {
    nombre: string;
    compromiso: string;
    completado: boolean;
}

interface Task {
    id: number;
    nombre: string;
    compromiso: string;
    text: string;
    completed: boolean;
}

export default function RegistroCompromisoView() {
    const location = useLocation();
    const navigate = useNavigate()
    const { title, date, integrantes, cardId }: { title: string; date: string; integrantes: Integrante[]; cardId: string } = location.state || {};

    const initialTasks = integrantes
        ? integrantes.map((integrante, index) => ({
            id: index,
            nombre: integrante.nombre,
            compromiso: integrante.compromiso,
            text: `${integrante.nombre}: ${integrante.compromiso}`,
            completed: integrante.completado,
        }))
        : [];

    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem(`tasks-${cardId}`);
        return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    });

    useEffect(() => {
        localStorage.setItem(`tasks-${cardId}`, JSON.stringify(tasks));
    }, [tasks, cardId]);

    const handleTaskChange = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <>
            <div className="bg-slate-500 min-h-screen flex justify-center p-10 md:p-15">
                <div className="w-full max-w-none rounded-lg flex flex-col md:flex-row items-start md:space-x-16">
                    <div className="w-full bg-gray-300 p-6 rounded-lg">
                        <h1 className="flex items-center justify-center text-xl font-bold bg-gray-700 text-white p-2 rounded-lg mb-6">
                            {title} el {date}
                        </h1>
                        <div className="flex items-center justify-center w-full bg-gray-400 p-8 rounded-lg">
                            <div className="w-full">
                                <div>
                                    {tasks.map(task => (
                                        <div key={task.id} className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => handleTaskChange(task.id)}>
                                            <span className={`text-xl ${task.completed ? 'text-gray-500' : ''}`}>
                                                {`${task.nombre}: ${task.compromiso}`}
                                            </span>
                                            <div className={`w-8 h-8 flex items-center justify-center border-2 rounded-lg ${task.completed ? 'bg-green-500' : 'bg-gray-500'} ml-6`}>
                                                {task.completed && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4 text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                                
                                            </div>
                                        </div>
                                    ))}
                                {/* Botón para regresar a SeguimientoView */}
                                <button
                                    className="mt-8 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                                    onClick={() => navigate('/seguimiento')}
                                >
                                    Volver a Registro de reuniones
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
