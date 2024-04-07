import { EventsContext } from "../EventsContext";
import { allEventsRequest, createEventRequest } from "../../api/events.api";
import { useState } from "react";
import { Event } from "../../interfaces/context/events/event";
import { isAxiosError } from "axios";

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
      return await createEventRequest(formData);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data)) {
          setErrors(error.response.data);
        } else {
          setErrors(error.response.data);
        }
      } else {
        console.error(error);
      }
    }
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        errors,
        loadEvents,
        createEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
