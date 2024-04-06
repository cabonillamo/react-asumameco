import { UsersContext } from "../UsersContext";
import {
  allUserRequest,
  createAsociadoRequest,
  createEncargadoRequest,
} from "../../api/users.api";
import { useState } from "react";
import { useEffect } from "react";
import { Manager, Associate } from "../../interfaces/context/managers/user";
import Cookie from "js-cookie";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [managers, setManagers] = useState<Manager[]>([]);
  const [associates, setAssociates] = useState<Associate[]>([]);

  const createAsociado = async (data: any) => {
    try {
      const res = await createAsociadoRequest(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createEncargado = async (data: any) => {
    try {
      const res = await createEncargadoRequest(data);
      console.log(res);
    } catch (error) {
      console.log(error);
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
        createAsociado,
        createEncargado,
        managers,
        associates,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
