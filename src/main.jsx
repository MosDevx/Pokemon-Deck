import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Jokes from './Components/Jokes';
import PokemonList from './Components/PokemonList';
import SecondPage from './Components/SecondPage';
import Vibrant from './Components/Vibrant';
import './index.css';
import  store  from './redux/store';

const router = createBrowserRouter([
  {

    element: <App />,
    path: '/',
    children: [
      {
        index: false,
        element: <SecondPage />,

      },
      {
        index: true,
        // path: '/two',
        element: <Vibrant />,
      },
    ],
  },

  {
    path: '/hey',
    element: <Vibrant />,
  },
  {
    path: '/jokes',
    element: <Jokes />,
  },
  {
    path: '/pokemon',
    element: <PokemonList />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
