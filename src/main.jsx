import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import "@mantine/core/styles.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>,
)
