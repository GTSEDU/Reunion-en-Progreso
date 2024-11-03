import { useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

interface EventCardProps {
    title: string;
    date: string;
    buttonText: string;
    resumen: string;
    integrantes: { nombre: string, compromiso: string }[];
  }
  

  export default function EventCard({ title, date, buttonText, resumen, integrantes }: EventCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const generatePDF = () => {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text(`Reunion: ${title}`, 10, 10);
      doc.setFontSize(12);
      doc.text(`Resumen: ${resumen}`, 10, 20, { maxWidth: 180 });
      // Agregar integrantes y compromisos
      let yPosition = 30;
      integrantes.forEach((integrante, index) => {
          doc.text(`${index + 1}. ${integrante.nombre}: ${integrante.compromiso}`, 10, yPosition);
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
          <Link to="#" className="bg-gray-800 text-white py-2 px-4 rounded-md text-center">
              {buttonText}
          </Link>

          {/* Botón para abrir el modal */}
          <button 
              onClick={openModal} 
              className="bg-gray-800 text-white py-2 px-4 rounded-md text-center"
          >
              Generación de actas
          </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-bold mb-4">Generación de Actas</h2>
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
                              Descargar PDF
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