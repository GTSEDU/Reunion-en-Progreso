import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface Integrante {
    nombre: string;
    compromiso: string;
    completado: boolean;
}

interface Task {
    id: number;
    text: string;
    nombre: string;
    compromiso: string;
    completed: boolean;
}

export default function SpeechToTextView() {
    const location = useLocation();
    const navigate = useNavigate()
    const { title, date, integrantes, cardId }: { title: string; date: string; integrantes: Integrante[]; cardId: string } = location.state || {};
    const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
    const [currentTranscript, setCurrentTranscript] = useState<string>("");
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    
    if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
    }

    useEffect(() => {
        // Actualiza el compromiso solo para la tarea activa
        if (activeTaskId !== null) {
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === activeTaskId ? { ...task, compromiso: transcript } : task
                )
            );
        }
    }, [transcript, activeTaskId]);

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

    useEffect(() => {
        // Actualiza el texto transcrito solo si hay una tarea activa
        if (activeTaskId !== null) {
            setCurrentTranscript(transcript);
        }
    }, [transcript, activeTaskId]);

    const toggleListening = (id: number) => {
        if (listening && activeTaskId === id) {
            SpeechRecognition.stopListening();
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === id ? { ...task, compromiso: transcript } : task
                )
            );
            setActiveTaskId(null);
            resetTranscript();
            setCurrentTranscript("");
        } else {
            setActiveTaskId(id);
            SpeechRecognition.startListening({ continuous: true, language: 'es-CL' });
        }
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
                                        <div key={task.id} className="flex items-center justify-between mb-4 cursor-pointer">
                                            <span className='w-1/6 text-xl'>
                                                {task.nombre}
                                            </span>
                                            <input
                                                type="text"
                                                value={activeTaskId === task.id ? currentTranscript : task.compromiso}
                                                placeholder="Agregar compromiso"
                                                className="ml-4 p-2 rounded border border-gray-400 w-3/4 h-12"
                                            />
                                            <button
                                                onClick={() => toggleListening(task.id)}
                                            >
                                                <span className={`material-icons-outlined cursor-pointer mx-2 transition-colors ${listening && activeTaskId === task.id ? 'text-green-500' : 'text-red-500'}`}>
                                                    {listening && activeTaskId === task.id ? 'mic' : 'mic_off'}
                                                </span>
                                            </button>
                                        </div>
                                    ))}
                                {/* Botón para regresar a GenerarCompromisoView */}
                                <button
                                    className="mt-8 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                                    onClick={() => navigate('/GenerarCompromiso')}
                                >
                                    Volver a Generar Compromiso
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