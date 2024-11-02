import { Link } from 'react-router-dom';

interface EventCardProps {
    title: string;
    day: string;
    date: string;
    linkPath: string;
    buttonText: string;
  }
  

  export default function EventCard({ title, day, date, linkPath, buttonText }: EventCardProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="flex items-center justify-center text-lg font-bold mb-2">{title}</h2>
        <p className="flex items-center justify-center">Día: {day}</p>
        <p className="flex items-center justify-center py-5">Fecha: {date}</p>
        <Link
          to={linkPath}
          className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-full"
        >
          {buttonText}
        </Link>
      </div>
    );
  }