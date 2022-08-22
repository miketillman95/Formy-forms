import React from 'react'

const ChoreChart = (props) => {
  return (
    <div className='choreLog-container'>
  <table>
      <thead> 
        <tr>
          <th>Chore description</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
        </thead> 
            {props.chore.map((v, i) => {
        return <tr>
          <th>{v[0]}</th>
          <th>{v[1]}</th>
          <th>{v[2]}</th>
        </tr>
      })}
    </table>
    </div>
  )
}

export default ChoreChart