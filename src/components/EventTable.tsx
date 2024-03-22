import React from 'react'
import { tableHeading, tableData } from '../data/tableData'
import eye from '../assets/eye.svg'
import { useNavigate } from 'react-router-dom'

const EventTable: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='eventtable'
    onClick={()=> navigate('/event-name')}
    >
      <table>
        <thead>
          <tr>
            {
              tableHeading?.map((item, index) => {
                return (
                  <>
                    <th key={index}>
                      <p>
                        {item?.title}
                      </p>
                    </th>
                  </>
                )
              })
            }

          </tr>
        </thead>

        <tbody>
          {
            tableData?.map((item, index) => {
              return (
                <tr key={index}>
                  {/* <img src={eye} alt="eye-icon" /> */}
                  <td> <img src={eye} alt="eye-icon" /> {item?.name}</td>
                  <td style={{ width: '300px' }}>{item?.start}</td>
                  <td style={{ width: '300px' }}>{item?.end}</td>
                  <td style={{ width: '800px' }}>{item?.client}</td>
                  <td style={{ width: '300px' }}>{item?.contact}</td>
                  <td style={{ width: '300px' }}>{item?.venue}</td>
                  <td style={{ width: '300px' }}>{item?.city}</td>
                  <td style={{ width: '800px' }}>{item?.state}</td>
                  <td style={{ width: '300px' }}>{item?.zipcode}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div className="eventtable__footer">
        <div className="eventtable__footer--nums">
          <button><i className="fa-solid fa-arrow-left"></i></button>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p className='active'>4</p>
          <button disabled><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

    </div>
  )
}

export default EventTable