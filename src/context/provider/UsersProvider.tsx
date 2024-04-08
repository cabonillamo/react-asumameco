import { UsersContext } from "../UsersContext";
import {
  allUserRequest,
  createAsociadoRequest,
  createEncargadoRequest,
  cambiarEstadoAsociadoRequest,
  cambiarEstadoEncargadoRequest,
} from "../../api/users.api";
import { useState } from "react";
import { useEffect } from "react";
import { Manager, Associate } from "../../interfaces/context/managers/user";
import Cookie from "js-cookie";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [managers, setManagers] = useState<Manager[]>([]);
  const [associates, setAssociates] = useState<Associate[]>([]);

  const createAsociado = async (data: FormData) => {
    try {
      const token = Cookie.get("token");
      if (token) {
        const resquest = await createAsociadoRequest(data, token);
        const res = await allUserRequest(token);
        setManagers(res.data.encargados);
        setAssociates(res.data.asociados);
        return resquest;
      }
    } catch (error: any) {
      throw error;
    }
  };

  const createEncargado = async (data: FormData) => {
    try {
      const token = Cookie.get("token");
      if (token) {
        const resquest = await createEncargadoRequest(data, token);
        const res = await allUserRequest(token);
        setManagers(res.data.encargados);
        setAssociates(res.data.asociados);
        return resquest;
      }
    } catch (error: any) {
      throw error;
    }
  };

  const cambiarEstadoAsociado = async (userId: number, activar: boolean) => {
    try {
      const token = Cookie.get("token");
      if (token) {
        await cambiarEstadoAsociadoRequest(userId, activar, token);
        const res = await allUserRequest(token);
        setManagers(res.data.encargados);
        setAssociates(res.data.asociados);
      } else {
        throw new Error("Token de autenticación no encontrado");
      }
    } catch (error: any) {
      throw error;
    }
  };

  const cambiarEstadoEncargado = async (userId: number, activar: boolean) => {
    try {
      const token = Cookie.get("token");
      if (token) {
        await cambiarEstadoEncargadoRequest(userId, activar, token);
        const res = await allUserRequest(token);
        setManagers(res.data.encargados);
        setAssociates(res.data.asociados);
      } else {
        throw new Error("Token de autenticación no encontrado");
      }
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      allUserRequest(token).then((res) => {
        setManagers(res.data.encargados);
        setAssociates(res.data.asociados);
      });
    }
  }, []);

  return (
    <UsersContext.Provider
      value={{
        managers,
        associates,
        createAsociado,
        createEncargado,
        cambiarEstadoAsociado,
        cambiarEstadoEncargado,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
