import { Compromiso } from '../types'

export const compromisos : Compromiso[] = [
    {
        id: 1,
        resumen: "En la reunión de matemáticas, resolvimos problemas de álgebra y planificamos el próximo certamen.",
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
        resumen: "En el laboratorio de física, realizamos un experimento para estudiar la ley de Hooke.",
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
        resumen: "En el taller de introducción a la física, repasamos conceptos básicos de cinemática.",
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
        resumen: "En el grupo de estudio de matemáticas III, resolvimos problemas de cálculo diferencial.",
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
        resumen: "En la preparación para el examen de física II, estudiamos problemas de dinámica y energía.",
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