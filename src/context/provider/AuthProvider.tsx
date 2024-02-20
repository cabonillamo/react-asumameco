import { AuthContext } from "../AuthContext";
import { loginRequest } from "../../api/auth.api";
import { useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode[] }) => {
  const [user, setUser] = useState<any>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>(null);

  const signIn = async (data: any) => {
    try {
      const res = await loginRequest(data);
      console.log("Successful login:", res.data.nombre);
      setUser(res.data.nombre);
      setIsAuth(true);
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
