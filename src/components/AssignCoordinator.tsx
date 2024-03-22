import React from 'react'

const AssignCoordinator: React.FC = () => {
    return (
        <div className='assigncoord'>
            <div className="assigncoord__flex">
                <div className="assigncoord__flex--flex1">
                    <p>Assign Coordinator</p>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <p>Add New Coordinator</p>
                </div>

                <div className="assigncoord__flex--flex2">
                    <p>Event Name <span>(Venue here)</span></p>
                    <div className="assigncoor__venue">
                        <p><span>Start:</span> 12-12-2023</p>
                        <p><span>Ends:</span> 15-12-2023</p>
                    </div>

                    <div className="assigncoor__venue">
                        <p><span>Venue Address:</span>Some Location 12, Name Here, City, State</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignCoordinator