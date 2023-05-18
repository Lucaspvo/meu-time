import React, { createContext, useContext } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

interface AuthContextProps {
  user: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>('olamundo');

  function handleLogin(email: string, password: string) {
    // const user = { id: 1, name: 'John Doe', email: email };
    setUser('olamundo');
  }

  function handleLogout() {
    setUser(null);
  }

  const authContextValue: AuthContextProps = {
    user,
    login: handleLogin,
    logout: handleLogout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}