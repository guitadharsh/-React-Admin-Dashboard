import React from 'react'
import { tableHeading, tableData } from '../data/tableData'
import eye from '../assets/eye.svg'

const EventTable: React.FC = () => {
  return (
    <div className='eventtable'>
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
                  <td><img src={eye} alt="eye-icon" /></td>
                  <td>{item?.name}</td>
                  <td>{item?.start}</td>
                  <td>{item?.end}</td>
                  <td>{item?.client}</td>
                  <td>{item?.contact}</td>
                  <td>{item?.venue}</td>
                  <td>{item?.city}</td>
                  <td>{item?.state}</td>
                  <td>{item?.zipcode}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div className="eventtable__footer">
        <div className="eventtable__footer--nums">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p className='active'>4</p>
        </div>

      </div>
    </div>
  )
}

export default EventTable