import React from 'react'
import { EventHeading } from '../components'

const EventName: React.FC = () => {
  return (
    <div className='eventname'>
    <EventHeading isSearch={false} title='Event Name' subTitle='(Venue Details)' />
    </div>
  )
}

export default EventName