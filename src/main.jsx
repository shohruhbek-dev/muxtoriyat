import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)
