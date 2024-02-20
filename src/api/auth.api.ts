import { client } from "./axios";

export const loginRequest = async (formData: FormData) =>
  client.post("usuario/login", formData);
