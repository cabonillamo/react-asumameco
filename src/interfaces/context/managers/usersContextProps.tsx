import { Manager, Associate } from "./user";

export interface usersContextProps {
  createAsociado: (data: any) => void;
  createEncargado: (data: any) => void;
  managers: Manager[];
  associates: Associate[];
}
