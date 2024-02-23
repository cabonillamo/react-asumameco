import { AuthContext } from "../AuthContext";
import { loginRequest } from "../../api/auth.api";
import { useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedUser = localStorage.getItem("user");
  const storedIsAuth = localStorage.getItem("isAuth");
  const [user, setUser] = useState<any>(storedUser || "");
  const [isAuth, setIsAuth] = useState<boolean>(storedIsAuth === "true");
  const [errors, setErrors] = useState<string[]>([]);

  const signIn = async (data: any) => {
    try {
      const res = await loginRequest(data);
      console.log("Successful login:", res.data.nombre);
      setUser(res.data.nombre);
      setIsAuth(true);
      localStorage.setItem("user", res.data.nombre);
      localStorage.setItem("isAuth", "true");
      return res.data.nombre;
    } catch (error: any) {
      console.error("Error during login:", error.response);
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data]);
      }
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
