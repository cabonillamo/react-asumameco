import { User } from "./user";

export interface authContextProps {
  user: User | null;
  isAuth: boolean;
  errors: string[];
  signIn: (data: FormData) => Promise<void>;
  signOut: () => Promise<void>;
}
