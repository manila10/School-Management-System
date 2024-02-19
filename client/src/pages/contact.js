import React from 'react'
import '../pages/contact.css'; 

const contact = () => {
  return (
    
       <div className='contact'>  
       
     <h1>Contact Us</h1>
       
   <form id="contact-form" method="POST">
    <label htmlFor='name'>Full Name</label>
    <input name="name" placeholder="Enter FullName........" type="text"/>
    <label htmlFor='email'>Email</label>
    <input name="email" placeholder='Enter Email........' type="email"/>
    <label htmlFor='message'>Message</label>
    <textarea 
    rows="6" 
    placeholder='Enter Message.......'
     name="message" required></textarea>
    <button>Send Message</button>
        </form>
    </div>
   
  )
}
   

export default contact

