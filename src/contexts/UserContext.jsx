import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userIdentity, setUserIdentity] = useState(
    JSON.parse(sessionStorage.getItem("userIdentity") || "{}")
  );

  useEffect(() => {
    sessionStorage.setItem("userIdentity", JSON.stringify(userIdentity));
  }, [userIdentity]);

  const resetUserIdentity = () => {
    setUserIdentity({});
  };
  const updateUserIdentity = (data) => {
    setUserIdentity({ ...data });
  };

  return (
    <UserContext.Provider
      value={{ userIdentity, resetUserIdentity, updateUserIdentity }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
