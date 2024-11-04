import { Compromiso } from '../types'

export const compromisos : Compromiso[] = [
    {
        id: 1,
        resumen: 'En la reciente reunión de matemáticas, se abordaron diversos problemas de álgebra que presentaban ciertas complejidades, con el objetivo de fortalecer las habilidades de resolución de ecuaciones y otros conceptos fundamentales. Durante la sesión, se discutieron métodos para simplificar expresiones algebraicas, analizar ecuaciones cuadráticas, y aplicar fórmulas y propiedades específicas para resolver problemas en un contexto teórico y práctico. La sesión también sirvió como un espacio de retroalimentación, donde cada miembro compartió sus avances y dificultades, permitiendo así un aprendizaje colaborativo. Además, se dedicó tiempo a planificar el próximo certamen. Se definieron los temas clave que serán evaluados y se estableció un esquema de estudio para las próximas semanas, buscando asegurar que cada integrante tenga un enfoque claro en sus áreas de mejora. Este enfoque permitirá que cada miembro llegue mejor preparado y con un conocimiento más consolidado para el próximo certamen.',
        integrantes: [
            {
                nombre: "José Ayala",
                compromiso: "Preparar material de estudio para la próxima reunión.",
                completado: true
            },
            {
                nombre: "Sebastián Vargas",
                compromiso: "Investigar sobre algebra.",
                completado: false
            }
        ]
    },
    {
        id: 2,
        resumen: "En esta reunión, analizamos y organizamos los resultados obtenidos en la reciente sesión de laboratorio, donde realizamos un experimento para estudiar la ley de Hooke y su aplicación en materiales elásticos. Durante el laboratorio, observamos cómo distintos resortes respondían a fuerzas variables, registrando datos sobre la relación entre la fuerza aplicada y la deformación resultante en cada caso. Javier Araya fue asignado para elaborar un informe detallado del experimento, en el cual se incluirán los procedimientos seguidos, las observaciones realizadas y las conclusiones obtenidas. Juan Pérez preparará una presentación de resultados, enfocándose en los hallazgos clave y en cómo se verificó la ley de Hooke en nuestros ensayos. Carlos Soto, por su parte, se encargó de recopilar todos los datos experimentales y organizarlos para facilitar su análisis. Esta reunión nos permitió coordinar la documentación y presentación de los resultados, asegurando que cada integrante comprenda su rol en la fase de reporte final y que podamos comunicar de manera efectiva los resultados del experimento.",
        integrantes: [
            {
                nombre: "Javier Araya",
                compromiso: "Elaborar informe del experimento.",
                completado: false
            },
            {
                nombre: "Juan Pérez",
                compromiso: "Preparar presentación de resultados.",
                completado: false
            },
            {
                nombre: "Carlos Soto",
                compromiso: "Recopilar datos del experimento.",
                completado: false
            }
        ]
    },
    {
        id: 3,
        resumen: "En esta reunión, organizamos y revisamos el trabajo realizado en el taller de introducción a la física, donde abordamos conceptos fundamentales de cinemática y discutimos su importancia para entender el movimiento de los cuerpos. Durante el taller, repasamos temas clave como velocidad, aceleración y trayectoria, con el objetivo de consolidar los conocimientos básicos necesarios para el estudio de fenómenos físicos. Pedro Rodríguez fue asignado para preparar material de estudio enfocado en cinemática, que incluirá ejemplos prácticos y explicaciones de los conceptos fundamentales. Por su parte, Jorge Mora asumió la tarea de investigar más a fondo sobre dinámica, explorando cómo las fuerzas afectan el movimiento de los cuerpos. Esta reunión nos permitió coordinar los esfuerzos para reforzar los temas vistos en el taller, asegurando que cada integrante cuente con los recursos necesarios para profundizar en los conceptos y aplicarlos en futuras actividades académicas.",
        integrantes: [
            {
                nombre: "Pedro Rodríguez",
                compromiso: "Preparar material de estudio sobre cinemática.",
                completado: false
            },
            {
                nombre: "Jorge Mora",
                compromiso: "Investigar sobre dinámica.",
                completado: false
            }
        ]
    },
    {
        id: 4,
        resumen: "En esta sesión del grupo de estudio de Matemáticas III, nos enfocamos en resolver problemas relacionados con cálculo diferencial, revisando técnicas y métodos para abordar ecuaciones y derivadas complejas. Durante la sesión, discutimos diversas estrategias para optimizar el proceso de resolución y mejorar nuestra comprensión de los conceptos fundamentales del cálculo. José Ayala se comprometió a preparar material de estudio que resumirá los puntos clave discutidos y brindará apoyo adicional para el próximo encuentro. Sebastián Vargas, por su parte, asumió la tarea de investigar sobre cálculo integral, lo cual complementará nuestro aprendizaje y nos ayudará a establecer conexiones entre cálculo diferencial e integral. Javier Araya se encargó de resolver problemas prácticos de cálculo diferencial durante la sesión, proporcionando ejemplos detallados y explicando cada paso del proceso. Esta reunión nos permitió no solo consolidar lo aprendido, sino también organizar los temas futuros, estableciendo un enfoque claro para avanzar en el estudio del cálculo en las próximas sesiones.",
        integrantes: [
            {
                nombre: "José Ayala",
                compromiso: "Preparar material de estudio para el próximo encuentro.",
                completado: false
            },
            {
                nombre: "Sebastián Vargas",
                compromiso: "Investigar sobre cálculo integral.",
                completado: false
            },
            {
                nombre: "Javier Araya",
                compromiso: "Resolver problemas de cálculo diferencial.",
                completado: false
            }
        ]
    },
    {
        id: 5,
        resumen: "En esta reunión de preparación para el examen de Física II, nos enfocamos en estudiar temas clave relacionados con dinámica y energía, abordando problemas prácticos que nos permitieron aplicar las leyes de Newton y los principios de conservación de la energía. La sesión fue una oportunidad para resolver dudas y reforzar nuestra comprensión de cómo las fuerzas influyen en el movimiento de los cuerpos y cómo se conserva la energía en sistemas físicos. Juan Pérez asumió la responsabilidad de preparar material de estudio detallado sobre dinámica, incluyendo ejemplos de problemas y ejercicios que nos serán útiles para el examen. Pedro Rodríguez, por su parte, se comprometió a investigar en profundidad sobre el tema de energía, recopilando información que abarque tanto energía cinética como potencial y sus aplicaciones en sistemas físicos. Con esta organización, nos aseguramos de cubrir los temas fundamentales y contar con los recursos necesarios para abordar el examen con confianza y una comprensión sólida de los conceptos.",
        integrantes: [
            {
                nombre: "Juan Pérez",
                compromiso: "Preparar material de estudio sobre dinámica.",
                completado: false
            },
            {
                nombre: "Pedro Rodríguez",
                compromiso: "Investigar sobre energía.",
                completado: false
            }
        ]
    }
]