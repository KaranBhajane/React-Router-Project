import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthContextFun from './context/AuthContextProv.jsx'
createRoot(document.getElementById('root')).render(

  <AuthContextFun>
  <BrowserRouter>

    <App />

  </BrowserRouter>
  </AuthContextFun>
)
