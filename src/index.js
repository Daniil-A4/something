import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import { Router } from './routes';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './styles/fonts.css';
import './styles/global.css';


const element = document.getElementById('root');
createRoot(element).render(
  <RouterProvider router={Router} />
);

