import { createContext, useContext } from "react";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {

const a = {
    name : 'jay',
    age : 22
}

  return <AuthContext.Provider value={{a}}>{children}</AuthContext.Provider>;
};

export const useCoN = () => useContext(AuthContext)
