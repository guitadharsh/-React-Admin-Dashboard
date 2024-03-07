import React from 'react'

const EventTab: React.FC = () => {
    return (
        <div className='eventtab'>
            <div className="eventtab__tab">
                Event Details
            </div> 
            <div className="eventtab__tab active">
                Assign Coordinator/Coorinator
            </div>
            <div className="eventtab__tab">
                Session Mangement
            </div>
            <div className="eventtab__tab">
                Generate SOW
            </div>
        </div>
    )
}

export default EventTab