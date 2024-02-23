import { AuthContext } from "../AuthContext";
import { loginRequest } from "../../api/auth.api";
import { useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedUser = localStorage.getItem("user");
  const storedIsAuth = localStorage.getItem("isAuth");
  const [user, setUser] = useState<any>(storedUser || "");
  const [userEmail, setUserEmail] = useState<any>(storedUser || "");
  const [isAuth, setIsAuth] = useState<boolean>(storedIsAuth === "true");
  const [errors, setErrors] = useState<string[]>([]);

  const signIn = async (data: any) => {
    try {
      const res = await loginRequest(data);
      console.log(res.data);

      setUser(res.data.nombre);
      setUserEmail(res.data.email);
      setIsAuth(true);

      localStorage.setItem("user", res.data.nombre);
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
        userEmail,
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
