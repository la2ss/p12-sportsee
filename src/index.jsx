// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Global Styles
import './index.css'

// Components
import Header from './components/header'
import Sidebar from './components/sidebar'
import PagesWrapper from './components/pagesWrapper'

// Pages

import HomePage from './pages/home'
import SettingsPage from './pages/settings'
import CommunityPage from './pages/community'
import ErrorPage from './pages/error'


// Providers
import { AppProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
            <Sidebar />
                <Header />
                <PagesWrapper>


                    <Routes>
                     
                        <Route path="/" element={<HomePage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    </PagesWrapper>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
)
