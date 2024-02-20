import React from 'react'
import '../pages/contact.css'; 
import { useState } from 'react';
import axios from 'axios';



const Contact = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      //console.log(name,email,message);
      const data={
        Name:name,
        Email:email,
        Message:message
      }
      axios.post('https://sheet.best/api/sheets/c9c1fa9c-5021-4cd8-9e29-a45f0bf0efa3', data).then((response)=>{
        console.log(response);
        setName('');
        setEmail('');
        setMessage('');
      })
    }


  return (
    
       <div className='contact'>  
       <form id="contact-form" method="POST" onSubmit={handleSubmit}>

   <h1>Contact Us</h1>
    <label htmlFor='name'>Full Name</label>
    <input name="name" placeholder="Enter FullName........" type="text"
     onChange={(e) => setName(e.target.value)} value={name}/>
    <label htmlFor='email'>Email</label>
    <input name="email" placeholder='Enter Email........' type="email"
    onChange={(e) => setEmail(e.target.value)} value={email}/>
    <label htmlFor='message'>Message</label>
    <textarea 
    rows="6" 
    placeholder='Enter Message.......'
     name="message" required 
     onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
    <button>Send Message</button>
        </form>
        
    </div>
   
  )
}
   

export default Contact

