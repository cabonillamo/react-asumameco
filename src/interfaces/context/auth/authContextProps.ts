import { User } from "./user";

export interface authContextProps {
  user: User | null;
  isAuth: boolean;
  errors: string[];
  isEmailValid: boolean;
  signIn: (data: FormData) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  changePassword: (
    currentPassword: string,
    newPassword: string,
    token: string
  ) => Promise<void>;
}
