import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider value={{ user }} {...props} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
