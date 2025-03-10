import React, { createContext, useState } from "react";

// Cria o contexto de autenticação
export const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    token: null,
    email: null,
    nome: "Guest",
    school: null,
    course: null,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};