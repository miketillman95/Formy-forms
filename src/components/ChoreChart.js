import React from 'react'

const ChoreChart = ({choreLogs}) => {
  return (
   <>
      <div className='chorelog-header'>
         <h3>Name</h3> 
         <h3>Date</h3>
         <h3>Chore Description</h3>
       </div>
    <div className='choreLog-words'>
        <p>{choreLogs.name}</p>
        <p>{choreLogs.date}</p>
        <p>{choreLogs.choreDesc}</p>
    </div>
    </>
  )
}

export default ChoreChart