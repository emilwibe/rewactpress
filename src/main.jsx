import React from 'react'
import ReactDOM from 'react-dom/client'
import TemplateMount from './template-files/TemplateMount'
import './css/base.css'
import './css/layout.css'
import './css/state.css'
import './css/module.css'
//import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemplateMount />
  </React.StrictMode>,
)
