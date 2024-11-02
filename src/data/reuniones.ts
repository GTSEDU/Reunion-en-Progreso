import { CalendarEvent } from "../types";

export const reuniones: CalendarEvent[] = [
    {
        id: 1,
        title: "Reunión de Matemáticas I",
        description: "Sesión de estudio para el examen de Matemáticas I",
        label: "bg-red-500",
        day: Date.now() - 2 * 24 * 60 * 60 * 1000, // Hace 2 días
        startTime: "10:00",
        endTime: "11:30",
        users: ["Jose Ayala", "Sebastian Vargas"],
        ramo: "Matemáticas I"
    },
    {
        id: 2,
        title: "Laboratorio de Física I",
        description: "Práctica de laboratorio para Física I",
        label: "bg-blue-500",
        day: Date.now() - 2 * 24 * 60 * 60 * 1000, // Hace 2 días
        startTime: "14:00",
        endTime: "16:00",
        users: ["Javier Araya", "Juan Perez", "Carlos Soto"],
        ramo: "Física I"
    },
    {
        id: 3,
        title: "Taller de Introducción a la Física",
        description: "Taller para reforzar conceptos básicos",
        label: "bg-green-500",
        day: Date.now() - 3 * 24 * 60 * 60 * 1000, // Hace 3 días
        startTime: "09:00",
        endTime: "11:00",
        users: ["Pedro Rodriguez", "Jorge Mora"],
        ramo: "Introducción a la Física"
    },
    {
        id: 4,
        title: "Grupo de Estudio Matemáticas III",
        description: "Repaso de temas avanzados",
        label: "bg-purple-500",
        day: Date.now() - 5 * 24 * 60 * 60 * 1000, // Hace 5 días
        startTime: "18:00",
        endTime: "20:00",
        users: ["Jose Ayala", "Sebastian Vargas", "Javier Araya"],
        ramo: "Matemáticas III"
    },
    {
        id: 5,
        title: "Preparación para examen de Física II",
        description: "Estudio en grupo para el examen de Física II",
        label: "bg-yellow-500",
        day: Date.now() - 7 * 24 * 60 * 60 * 1000, // Hace 7 días
        startTime: "13:00",
        endTime: "15:30",
        users: ["Juan Perez", "Pedro Rodriguez"],
        ramo: "Física II"
    }
];