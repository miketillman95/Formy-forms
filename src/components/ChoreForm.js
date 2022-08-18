import React from 'react'

const ChoreForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
<form onSubmit={e => {handleSubmit(e)}}>
        <label> Chore description</label>
            <br/>
            <input 
                name= 'choreDesc'
                type= 'text'
                />
                <br/>
        <label>Name</label>
            <br/>
            <input 
                name='userName'
                type= 'text'
                />
                <br/>
        <label>Date</label>
            <br/>
            <input 
            name='date'
            type= 'date'
            />
            <br/>
            <br/>
        <input
            className='submitBtn'
            type = 'submit'
            value = 'Log chore'
            />  
    </form>  )
}

export default ChoreForm