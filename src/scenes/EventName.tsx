import React from 'react'
import { EventHeading, EventTab, AssignCoordinator } from '../components'

const EventName: React.FC = () => {
  return (
    <div className='eventname'>
      <EventHeading isSearch={false} title='Event Name' subTitle='(Venue Details)' />
      <EventTab />
      <AssignCoordinator />
    </div>
  )
}

export default EventName