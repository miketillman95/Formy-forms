import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import ChoreChart from './ChoreChart'

const innitalValue ={
    name: '',
    date: '',
    choreDesc: ''
}
const ChoreForm = () => {
    const [formValues, setFormValues] = useState(innitalValue)
    const [formErrors, setFormErrors] = useState({})
    const navigate= useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [choreLogs, setChoreLogs] = useState([])


    const addChoreLog= (log) => {
        // console.log(log, 'adding the chore to the log')
        setChoreLogs(log)
    }

    const submitForm = () => {
        console.log(formValues, 'has been submitted')
    };

    const handleChange = (e) => {
        const {name, value}= e.target

        setFormValues({...formValues, [name]: value})
    }

  
    function choreAlert() {
        navigate('/chorechart')
    }
        

  
    function validate(value) {
        console.log('here')
        let errors = {}
        const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

        if(!value.choreDesc) {
            errors.choreDesc = "must enter a description"
    
        }   else if (value.choreDesc.length < 10 ){
            errors.choreDesc = "Description must be longer than 10 characters innit"
        }
        if(!value.name){
            errors.name = "Cant be blank lad"

        } else if (regex.test(value.name)){
            errors.name = 'Invalid name laddy'
        }
        if(!value.date){
            errors.date = "Cant be blank lad"

    }

    return errors

    }
    const handleSubmit = (e) =>{
        // adds the chores of desc, name and date from the state in app.js
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
        addChoreLog(formValues)
        e.preventDefault()







    }

    useEffect(()=> {
        if(Object.keys(formErrors).length === 0 && isSubmitting){
            console.log('hasiiii')
            submitForm()
        }
    }, [formErrors])

    
      
  return (
    <div className='page'>
    {/* form wonr clear after submission */}
<form onSubmit={e => {handleSubmit(e)}} >
{Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Submitted successfully</span>
      )}
      <div className='form-container'>
        <label> Chore description</label>
            <br/>
            <input className='field'
                name= 'choreDesc'
                type= 'text'
                onChange={handleChange}
                value ={formValues.choreDesc}
                />
                <br/>
                {
                    formErrors.choreDesc && (
                        <p className="error">{formErrors.choreDesc}</p>
                )}
        <label>Name</label>
            <br/>
            <input 
            className='field'
                name='name'
                type= 'text'
                onChange={handleChange}
                value ={formValues.name}
                />
                {
                    formErrors.name && (
                        <p className="error">{formErrors.name}</p>
                )} 
                <br/>
        <label>Date</label>
            <br/>
            <input 
            className='field'
            name='date'
            type= 'date'
            onChange={handleChange}
                value ={formValues.date}
            />
            <br/>
            {
                    formErrors.date && (
                        <p className="error">{formErrors.date}</p>
                )}
        <input
            className='submitBtn'
            type = 'submit'
            value = 'Log chore'
            // onClick={choreAlert}
            /> 
            </div> 
    </form>
 
    <ChoreChart choreLogs={choreLogs}/>
    </div>
    )
}

export default ChoreForm