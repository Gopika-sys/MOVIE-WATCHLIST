import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Movie from './Pages/Movie';
import MovieList from './Pages/MovieList';
import Genres from './Pages/Genres';
import Contact from './Pages/Contact';

const routeVariables = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },


      { path: "/movie", element: <MovieList /> },         
      { path: "/movie/:movId", element: <Movie /> },    
      { path: "/genres", element: <Genres /> },
      { path: "/genres/:genreName", element: <Genres /> },

      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <h1>Page Not Found</h1> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routeVariables} />
  </React.StrictMode>
);

reportWebVitals();