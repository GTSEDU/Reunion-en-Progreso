import { Link } from 'react-router-dom';

interface EventCardProps {
    cardId: number;
    title: string;
    date: string;
    buttonText: string;
    integrantes: { nombre: string, compromiso: string; completado: boolean }[];
  }
  

  export default function EventCard({ cardId, title, date, buttonText, integrantes }: EventCardProps) {

    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="flex items-center justify-center text-lg font-bold mb-2">{title}</h2>
      <p className="flex items-center justify-center">Fecha: {date}</p>
      
      <div className="flex flex-col gap-2 mt-4">
          {/* Botón principal */}
          <Link
            to="/SpeechToText"
            state={{ title, date, integrantes, cardId }}
            className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-full"
          >
            {buttonText}
          </Link>
      </div>
    </div>
  );
}