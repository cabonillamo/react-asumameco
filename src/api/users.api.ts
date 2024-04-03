import { client } from "./axios";

export const allUserRequest = async (token: string) =>
  client.get("Usuario/Usuarios", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
