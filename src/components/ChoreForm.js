import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import ChoreChart from './ChoreChart'


const ChoreForm = () => {
    const [choreDesc, setChoreDesc] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const navigate= useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [choreLogs, setChoreLogs] = useState([])


    const addChoreLog= (log) => {
        console.log(log)
        setChoreLogs(...log)
    }

    const submitForm = () => {
        console.log(name, date, choreDesc);
      };

    const handleSubmit = (e) =>{
        // adds the chores of desc, name and date from the state in app.js
        e.preventDefault()
        setFormErrors(validate(name, date, choreDesc))
        addChoreLog([choreDesc, name, date])
        console.log(name, date, choreDesc)
        setIsSubmitting(true)



    }
    function choreAlert() {
        navigate('/chorechart')
    }
        

  
    function validate(name, date, choreDesc) {
        console.log('here')
        let errors = {}
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if(!choreDesc) {
            errors.choreDesc = "must enter a description"
    
        }   else if (choreDesc.length < 10 ){
            errors.choreDesc = "Description must be longer than 10 characters innit"
        }
        if(!name.name){
            errors.name = "Cant be blank lad"

        } else if (!regex.test(name.name)){
            errors.name = 'Invalid name laddy'
        }
        if(!date.date){
            errors.date = "Cant be blank lad"

    }

    return errors

    }

    useEffect(()=> {
        if(Object.keys(formErrors).length === 0 && isSubmitting){
            submitForm()
        }
    }, [formErrors])

    
      
  return (
    <>
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
                {
                    formErrors.choreDesc && (
                        <p className="error">{formErrors.choreDesc}</p>
                )}
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
            // onClick={choreAlert}
            />  
    </form>
 

    </>
    )
}

export default ChoreForm