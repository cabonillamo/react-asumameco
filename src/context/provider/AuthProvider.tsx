import { AuthContext } from "../AuthContext";
import { loginRequest, meRequest } from "../../api/auth.api";
import { useEffect, useState } from "react";
import { User } from "../../interfaces/context/auth/user";
import Cookie from "js-cookie";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const signIn = async (data: FormData) => {
    try {
      const res = await loginRequest(data);

      Cookie.set("token", res.data.usuario.token);

      setUser(res.data);
      setIsAuth(true);

      return res.data.nombre;
    } catch (error: any) {
      if (Array.isArray(error.response.data)) setErrors(error.response.data);
      else setErrors([error.response.data]);
    }
  };

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      meRequest(token)
        .then((res) => {
          console.log(res);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
