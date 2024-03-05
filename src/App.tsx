import React from 'react'
import './global.scss'
import { Routes, Route } from 'react-router-dom'
import { AdminLayout } from './layouts'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* <Route></Route>
        <Route></Route> */}
      </Route>
    </Routes>
  )
}

export default App