import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth } from './components/auth';
import { Navigate, Outlet } from 'react-router';

function App() {
  const { credential } = useAuth();

  if (!credential) {
    return <Navigate to={'/login'} replace={true} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
