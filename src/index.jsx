// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Global Styles
import './index.css'

// Components
import Header from './components/header'
import Sidebar from './components/sidebar'


// Pages

import HomePage from './pages/Home'


// Providers
import { AppProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
            <Sidebar />
                <Header />
               
                    <Routes>
                     
                        <Route path="/" element={<HomePage />} />

                    </Routes>
           
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
)
