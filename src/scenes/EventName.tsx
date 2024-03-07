import React from 'react'
import { EventHeading, EventTab } from '../components'

const EventName: React.FC = () => {
  return (
    <div className='eventname'>
      <EventHeading isSearch={false} title='Event Name' subTitle='(Venue Details)' />
      <EventTab />
    </div>
  )
}

export default EventName