import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TagManager from 'react-gtm-module'
import { Typography } from '@mui/material'
const tagManagerArgs = {
  gtmId: 'GTM-XXXXXXX'
}

TagManager.initialize(tagManagerArgs)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Typography>This is main page</Typography>
    <App />
  </StrictMode>,
)
