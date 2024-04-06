import { Manager, Associate } from "./user";

export interface usersContextProps {
  managers: Manager[];
  associates: Associate[];
  createEncargado: (data: FormData) => Promise<any>;
  createAsociado: (data: FormData) => Promise<any>;
}
