import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeContext from "./context/theme";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <QueryClientProvider client={queryClient}>  
      <ThemeContext>
        <App />
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>
)
