import { AuthContext } from "../AuthContext";
import { loginRequest } from "../../api/auth.api";
import { useState } from "react";
import { User } from "../../interfaces/context/auth/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedUser = localStorage.getItem("user");
  const storedIsAuth = localStorage.getItem("isAuth");
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [isAuth, setIsAuth] = useState<boolean>(storedIsAuth === "true");
  const [errors, setErrors] = useState<string[]>([]);

  const signIn = async (data: FormData) => {
    try {
      const res = await loginRequest(data);
      console.log(`res`, res);
      console.log(`res.data`, res.data);

      setUser(res.data);
      setIsAuth(true);

      localStorage.setItem("user", JSON.stringify(res.data.nombre));
      localStorage.setItem("isAuth", "true");

      return res.data.nombre;
    } catch (error: any) {
      if (Array.isArray(error.response.data)) setErrors(error.response.data);
      else setErrors([error.response.data]);
    }
  };

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
