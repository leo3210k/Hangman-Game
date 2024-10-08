import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './main/App.tsx';
import Home from './components/Home.tsx';
import HowToPlay from './components/HowToPlay.tsx';
import PickCategory from './components/PickCategory.tsx';
import Game from './components/Game.tsx';
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/howtoplay",
        element: <HowToPlay />,
      },
      {
        path: "/pickcategory",
        element: <PickCategory />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
