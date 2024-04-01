import { Event } from "../../../interfaces/context/events/event";

export interface eventsContextProps {
  events: Event[];
  loadEvents: () => void;
  createEvent: (
    nombre: string,
    direccion: string,
    fecha: string,
    descripcion: string,
    imagen: File
  ) => void;
}
