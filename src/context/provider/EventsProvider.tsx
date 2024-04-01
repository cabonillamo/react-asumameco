import { EventsContext } from "../EventsContext";
import { allEventsRequest, createEventRequest } from "../../api/events.api";
import { useState } from "react";
import { Event } from "../../interfaces/context/events/event";

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const loadEvents = async () => {
    const res = await allEventsRequest();
    setEvents(res.data);
  };

  const createEvent = async (
    nombre: string,
    direccion: string,
    fecha: string,
    descripcion: string,
    imagenFile: File
  ) => {
    const formData = new FormData();

    formData.append("Nombre", nombre);
    formData.append("Direccion", direccion);
    formData.append("Fecha", fecha);
    formData.append("Descripcion", descripcion);
    formData.append("imagenFile", imagenFile);

    await createEventRequest(formData);
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        loadEvents,
        createEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
