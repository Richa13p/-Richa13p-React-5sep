import React, { useState } from 'react'
// error but can't find that
const Third = () => {
    const [values , setValues] = useState({
        firstName : '',
        lastName : '',
        email : '',
    })
       const handleData = (e)=>{
      const {name , value}  = e.target
      //this is i am not able to made
      
      setValues((prevFormData) => ({ ...prevFormData, [name]: value }));

    
       }
  return (
    <div>
    <form style={{display: "flex" ,flexDirection:"column", justifyContent:"center",alignItems:"center" , height:"100vh"}}>
    <input
        id = "firstName"
        class = "form-filed"
        type="text"
        name='firstName'
        placeholder='firstName'
        onChange={handleData}
        value={values.firstName}
        style={{marginBottom:"10px"}}
    />
    <input
        id ='lastName'
        class='form-filed'
        type = 'text'
        placeholder='Last Name'
        onChange={handleData}
        name = 'lastName'
        value={values.lastName}
        style={{marginBottom:"10px"}}
    />
    <input 
        id='email'
        class = "form-field"
        type ="text"
        placeholder='Email'
        onChange={handleData}
        name="email"
        value={values.email}
        style={{marginBottom:"10px"}}
    />
    </form>

    </div>
  )
}

export default Third