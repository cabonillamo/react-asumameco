import { client } from "./axios";

export const allEventsRequest = async () => client.get("Usuario/GetEventos");

export const createEventRequest = async (formData: FormData) => {
  client.post("Usuario/CrearEvento", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
