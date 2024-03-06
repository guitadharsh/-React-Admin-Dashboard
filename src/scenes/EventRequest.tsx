import React from 'react'
import { EventTable, EventHeading } from '../components'

const EventRequest: React.FC = () => {
  return (
    <div className='eventreq'>
      <EventHeading />
      <EventTable />
    </div>
  )
}

export default EventRequest