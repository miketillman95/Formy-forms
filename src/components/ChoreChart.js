import React from 'react'

const ChoreChart = ({chore}) => {
  console.log(chore, typeof chore)
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
            {chore.map((v, i) => {
              // this wont show up 
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