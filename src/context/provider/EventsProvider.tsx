import { EventsContext } from "../EventsContext";
import {
  allEventsRequest,
  createEventRequest,
  participateEventRequest,
} from "../../api/events.api";
import { useState } from "react";
import { Event } from "../../interfaces/context/events/event";

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const loadEvents = async () => {
    const res = await allEventsRequest();
    setEvents(res.data);
  };

  const createEvent = async (
    nombre: string,
    IdUsuarioCreador: number,
    direccion: string,
    fecha: string,
    descripcion: string,
    imagenFile: File
  ) => {
    const formData = new FormData();

    formData.append("Nombre", nombre);
    formData.append("IdUsuarioCreador", IdUsuarioCreador.toString());
    formData.append("Direccion", direccion);
    formData.append("Fecha", fecha);
    formData.append("Descripcion", descripcion);
    formData.append("imagenFile", imagenFile);

    try {
      const res = await createEventRequest(formData);
      return res.message;
    } catch (error: any) {
      throw error.response.data;
    }
  };

  const participateEvent = async (IdEvento: number, IdAsociado: number) => {
    try {
      const res = await participateEventRequest(IdEvento, IdAsociado);
      return res;
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        errors,
        loadEvents,
        createEvent,
        participateEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
