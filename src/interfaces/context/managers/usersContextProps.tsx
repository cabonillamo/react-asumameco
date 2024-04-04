import { Manager, Associate } from "./user";

export interface usersContextProps {
  managers: Manager[];
  associates: Associate[];
}
