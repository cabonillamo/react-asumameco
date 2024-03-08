import { AuthContext } from "../AuthContext";
import {
  loginRequest,
  signOutRequest,
  meRequest,
  resetPasswordRequest,
  changePasswordRequest,
} from "../../api/auth.api";
import { useEffect, useState } from "react";
import { User } from "../../interfaces/context/auth/user";
import Cookie from "js-cookie";
import { isAxiosError } from "axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const signIn = async (data: FormData) => {
    try {
      const res = await loginRequest(data);

      Cookie.set("token", res.data.usuario.token);

      setUser(res.data.usuario);
      setIsAuth(true);

      return res.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data)) {
          setErrors(error.response.data);
        } else {
          setErrors([error.response.data]);
        }
      } else {
        console.error(error);
      }
    }
  };

  const signOut = async () => {
    try {
      const token = Cookie.get("token");
      if (!token) throw new Error("No token found");

      await signOutRequest(token);

      Cookie.remove("token");

      setUser(null);
      setIsAuth(false);
    } catch (error) {
      console.error(error);
    }
  };
  const resetPassword = async (email: string) => {
    try {
      await resetPasswordRequest(email);
      setErrors([]);
      setIsEmailValid(true);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data)) setErrors(error.response.data);
        else setErrors([error.response.data]);

        setIsEmailValid(false);
      }
    }
  };

  const changePassword = async (
    email: string,
    resetToken: string,
    newPassword: string
  ) => {
    try {
      console.log(email, resetToken, newPassword);
      await changePasswordRequest(email, resetToken, newPassword);
      console.log("Contraseña cambiada exitosamente");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data)) setErrors(error.response.data);
        else setErrors([error.response.data]);
      } else console.error("Error al cambiar la contraseña:", error);
    }
  };

  useEffect(() => {}, [isEmailValid]);
  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      meRequest(token)
        .then((res) => {
          setUser(res);
          setIsAuth(true);
        })
        .catch((_) => {
          setUser(null);
          setIsAuth(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        isEmailValid,
        signIn,
        signOut,
        resetPassword,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
