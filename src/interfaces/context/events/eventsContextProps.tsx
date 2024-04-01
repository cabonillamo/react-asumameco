import { Event } from "../../../interfaces/context/events/event";

export interface eventsContextProps {
  events: Event[];
  errors: string[];
  loadEvents: () => void;
  createEvent: (
    nombre: string,
    direccion: string,
    fecha: string,
    descripcion: string,
    imagen: File
  ) => any;
}
