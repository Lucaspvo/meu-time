import React, { createContext, useContext } from 'react';

interface AuthContextProps {
    credential: string | null;
    login: (credential: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    credential: null,
    login: () => {},
    logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [credential, setCredential] = React.useState<string>('');

  function handleLogin(credential: string) {
    setCredential(credential);
  }

  function handleLogout() {
    setCredential('');
  }

  const authContextValue: AuthContextProps = {
    credential,
    login: handleLogin,
    logout: handleLogout,
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