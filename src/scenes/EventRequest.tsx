import React from 'react'
import { EventTable, EventHeading } from '../components'

const EventRequest: React.FC = () => {
  return (
    <>
      <div className='eventreq'>
        <EventHeading isSearch={true} title='Event Requests' />
        <EventTable />
      </div>
    </>
  )
}

export default EventRequest