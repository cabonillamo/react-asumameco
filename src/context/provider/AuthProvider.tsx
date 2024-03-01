import { AuthContext } from "../AuthContext";
import { loginRequest, signOutRequest, meRequest } from "../../api/auth.api";
import { useEffect, useState } from "react";
import { User } from "../../interfaces/context/auth/user";
import Cookie from "js-cookie";
import { isAxiosError } from "axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

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

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      meRequest(token)
        .then((res) => {
          setUser(res);
          setIsAuth(true);
        })
        .catch((error) => {
          console.error("Error response:", error.response);
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
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
