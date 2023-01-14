import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Jokes from './Components/Jokes';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';
import SecondPage from './Components/SecondPage';
import Vibrant from './Components/Vibrant';
import './index.css';
import store from './redux/store';

const router = createBrowserRouter([
 

  {
    path: '/',
    
    children: [
      {
        index:true,
        element: <PokemonList />,
      },
      {
        path: ':name',
        element: <PokemonDetails />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
