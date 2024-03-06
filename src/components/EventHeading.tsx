import React from 'react'
import plusImg from '../assets/plus.svg'
import searchImg from '../assets/search.svg'

interface EventHeadingProps {
    isSearch: boolean
    title: string
    subTitle?: string
}

const EventHeading: React.FC<EventHeadingProps> = ({ isSearch, title, subTitle }) => {
    return (
        <div className="eventreq__heading">
            <h1>{title} <span>{subTitle}</span></h1>

            {
                isSearch &&
                <div className="eventreq__search">

                    <div className="eventreq__input">
                        <img src={searchImg} alt="search-icon" className="search-icon" />
                        <input type="text" placeholder='Search here' />
                    </div>

                    <button>
                        <img src={plusImg} alt="plus-icon" />
                    </button>

                </div>
            }

        </div>
    )
}

export default EventHeading