export type Usuario = {
    id: number,
    name: string
}

export type Ramo = {
    id: number,
    name: string
}

export type CalendarEvent = {
    id: number;
    title: string;
    description: string;
    label: string;
    day: number | undefined;
    startTime: string;
    endTime: string;
    users: string[];
    ramo: string | null;
}