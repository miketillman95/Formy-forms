import React, {useState} from 'react'
import { useNavigate } from 'react-router'


const ChoreForm = (addChoreLog) => {
    const [choreDesc, setChoreDesc] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const navigate= useNavigate()



    const handleSubmit = (e) =>{
        // adds the chores of desc, name and date from the state in app.js
        addChoreLog([choreDesc, name, date])
        e.preventDefault()

    }
    function choreAlert() {
        alert("Chores are in mate");
        navigate('/chorechart')
        

      }
      
  return (
<form onSubmit={e => {handleSubmit(e)}}>
        <label> Chore description</label>
            <br/>
            <input 
                name= 'choreDesc'
                type= 'text'
                onChange={e => setChoreDesc(e.target.value)}
                value ={choreDesc}
                />
                <br/>
        <label>Name</label>
            <br/>
            <input 
                name='userName'
                type= 'text'
                onChange={e => setName(e.target.value)}
                value ={name}
                />
                <br/>
        <label>Date</label>
            <br/>
            <input 
            name='date'
            type= 'date'
            onChange={e => setDate(e.target.value)}
                value ={date}
            />
            <br/>
            <br/>
        <input
            className='submitBtn'
            type = 'submit'
            value = 'Log chore'
            onClick={choreAlert}
            />  
    </form> 
    )
}

export default ChoreForm