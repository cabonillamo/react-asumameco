import { client } from "./axios";

export const loginRequest = async (formData: FormData) =>
  client.post("usuario/login", formData);

export const meRequest = async (token: string) => {
  try {
    const response = await client.get("usuario/InformacionUsuario", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
