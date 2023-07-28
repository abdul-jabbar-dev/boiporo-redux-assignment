import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import customRoutes from './modules/routes/routes.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={customRoutes} />
    </Provider>
  </React.StrictMode>,
)
