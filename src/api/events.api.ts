import { client } from "./axios";

export const allEventsRequest = async () => client.get("Usuario/GetEventos");
