import { UsersContext } from "../UsersContext";
import { allUserRequest } from "../../api/users.api";
import { useState } from "react";
import { useEffect } from "react";
import { User } from "../../interfaces/context/managers/User";
import Cookie from "js-cookie";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      allUserRequest(token).then((res) => {
        setUsers(res.data);
        console.log(res);
      });
    }
  }, []);
  return (
    <UsersContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
