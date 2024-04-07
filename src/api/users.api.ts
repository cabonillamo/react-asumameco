import { client } from "./axios";

export const allUserRequest = async (token: string) =>
  client.get("Usuario/Usuarios", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createAsociadoRequest = async (data: FormData, token: string) => {
  try {
    const res = client.post("Usuario/CrearAsociado", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const createEncargadoRequest = async (data: FormData, token: string) => {
  try {
    const res = await client.post("Usuario/CrearEncargado", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const cambiarEstadoAsociadoRequest = async (
  id: number,
  activar: boolean,
  token: string
) => {
  try {
    const res = await client.post(
      `Usuario/CambiarEstadoAsociado/${id}`,
      activar,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const cambiarEstadoEncargadoRequest = async (
  id: number,
  activar: boolean,
  token: string
) => {
  try {
    const res = await client.post(
      `Usuario/CambiarEstadoEncargado/${id}`,
      activar,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    throw error;
  }
};