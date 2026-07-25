import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContextProvider } from './contex/MyContext.jsx'
import Register from './pages/Register.jsx'
import MyRouter from './Router/MyRouter.jsx'
 import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
<BrowserRouter >
<ContextProvider>
    <App />
   <ToastContainer />
    </ContextProvider>
 </BrowserRouter>
)
