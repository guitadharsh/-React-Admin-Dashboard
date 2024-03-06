import React from 'react'
import './global.scss'
import { Routes, Route } from 'react-router-dom'
import { AdminLayout } from './layouts'
import { AdminPage } from './scenes'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
      </Route>
    </Routes>
  )
}

export default App