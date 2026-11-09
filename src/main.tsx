// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/main-routes.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,
  <RouterProvider router={router} />
)
