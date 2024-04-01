import { client } from "./axios";

export const allEventsRequest = async () => client.get("Evento/GetEventos");

export const createEventRequest = async (formData: FormData) => {
  client.post("Evento/CrearEvento", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
