import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EmployeeList from './EmployeeList/EmployeeList.jsx'
import EmployeeCard from './EmployeeCard/EmployeeCard.jsx'
import PersonsApp from './PersonsApp/PersonsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonsApp />
  </StrictMode>,
)
