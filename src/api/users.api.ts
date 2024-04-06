import { client } from "./axios";

export const allUserRequest = async (token: string) =>
  client.get("Usuario/Usuarios", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createAsociadoRequest = async (data: any) =>
  client.post("Usuario/CrearAsociado", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const createEncargadoRequest = async (data: any) =>
  client.post("Usuario/CrearEncargado", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });