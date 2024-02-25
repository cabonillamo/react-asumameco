import { User } from "./user";

export interface authContextProps {
  user: User | null;
  isAuth: boolean;
  errors: any;
  signIn: (data: any) => Promise<any>;
}
