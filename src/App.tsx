import React, { useEffect } from 'react'
import './global.scss'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AdminLayout } from './layouts'
import { EventRequest, EventName } from './scenes'

const App: React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/event-request')
  }, [])

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path='/event-request' element={<EventRequest />} />
        <Route path='/event-name' element={<EventName />} />
      </Route>
    </Routes>
  )
}

export default App