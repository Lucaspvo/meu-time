import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/log-in';
import Something from './components/something';
import { AuthProvider } from './components/auth';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'primeflex/primeflex.css';
import './index.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "something",
        element: <Something />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
