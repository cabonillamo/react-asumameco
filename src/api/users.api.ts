import { client } from "./axios";

export const allUserRequest = async (token: string) =>
  client.get("Usuario/Usuarios", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createAsociadoRequest = async (data: FormData) => {
  try {
    const res = client.post("Usuario/CrearAsociado", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const createEncargadoRequest = async (data: FormData) => {
  try {
    const res = await client.post("Usuario/CrearEncargado", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
