import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContetxtProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(
      JSON.parse(localStorage.getItem("chat-user")) || null
    );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};