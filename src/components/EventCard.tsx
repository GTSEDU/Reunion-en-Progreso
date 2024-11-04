import { useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

interface EventCardProps {
    cardId: number;
    title: string;
    date: string;
    buttonText: string;
    resumen: string;
    integrantes: { nombre: string, compromiso: string; completado: boolean }[];
  }
  

  export default function EventCard({ cardId, title, date, buttonText, resumen, integrantes }: EventCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const generatePDF = () => {
        // Recuperar los datos de `localStorage`
        const savedTasks = localStorage.getItem(`tasks-${cardId}`);
        const tasks = savedTasks ? JSON.parse(savedTasks) : [];

        // Combinar los datos de `integrantes` con el estado de `localStorage`
        const combinedIntegrantes = integrantes.map((integrante, index) => {
            const task = tasks.find((t: { text: string; completed: boolean }) => 
                t.text === `${integrante.nombre}: ${integrante.compromiso}`
            );
            return {
                ...integrante,
                completado: task ? task.completed : integrante.completado,
            };
        });

        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text(`Reunion: ${title}`, 10, 10);
        doc.setFontSize(12);
        doc.text(`Resumen: ${resumen}`, 10, 20, { maxWidth: 180 });
        const resumenText = `Resumen: ${resumen}`;
        const resumenDimensions = doc.getTextDimensions(resumenText, { maxWidth:180 });
        // Agregar integrantes, compromisos y estado
        let yPosition = 20 + resumenDimensions.h + 10;
        combinedIntegrantes.forEach((integrante, index) => {
            const estado = integrante.completado ? "Cumplido" : "Pendiente";
            
            // Texto del compromiso
            doc.text(`${index + 1}. ${integrante.nombre}: ${integrante.compromiso}`, 10, yPosition);

            // Estado del compromiso alineado a la derecha
            doc.text(`Estado: ${estado}`, 160, yPosition);

            yPosition += 10;
        });

        // Guardar el PDF
        doc.save(`${title}.pdf`);
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="flex items-center justify-center text-lg font-bold mb-2">{title}</h2>
      <p className="flex items-center justify-center">Fecha: {date}</p>
      
      <div className="flex flex-col gap-2 mt-4">
          {/* Botón principal */}
          <Link
            to="/RegistroCompromiso"
            state={{ title, date, integrantes, cardId }}
            className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-full"
          >
            {buttonText}
          </Link>

          {/* Botón para abrir el modal */}
          <button 
              onClick={openModal} 
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md text-center"
          >
              Registro de actas
          </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-bold mb-4">Registro de Actas</h2>
                  <p className="mb-6">{resumen}</p>
                  <form>
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                              Integrantes y Compromisos
                          </label>
                          <ul className="list-disc pl-5">
                              {integrantes.map((integrante, index) => (
                                  <li key={index}>
                                      <strong>{integrante.nombre}:</strong> {integrante.compromiso}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="flex justify-end mt-4">
                          {/* Botón para generar PDF */}
                          <button 
                              type="button" 
                              onClick={generatePDF} 
                              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
                          >
                              Generacion de actas (pdf)
                          </button>
                          <button 
                              type="button" 
                              onClick={closeModal} 
                              className="bg-gray-800 text-white py-2 px-4 rounded-md"
                          >
                              Cerrar
                          </button>
                      </div>
                  </form>
              </div>
          </div>
        )}
    </div>
  );
}