import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function SignUp() {

    const [name, setName]= useState();
    const [id, setId]=useState();
    const [password, setPassword]= useState();
    const navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/admin', {name, id, password})
        .then(result => {console.log(result)
        navigate('/admlogin')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className= "bg-white p-3 rounded w-25">
            <h2> Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'>
                        <strong>Name</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name="name"
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='id'>
                        <strong>Id Number</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Id Number'
                    autoComplete='off'
                    name="id"
                    className='form-control rounded-0'
                    onChange={(e) => setId(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    placeholder='Enter Password'
                    autoComplete='off'
                    name="password"
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
                </form>

                <p className="text-center">Already have an account</p>

                <Link to="/admlogin" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Login
                </Link>
           
        </div>

    </div>
  )
}

export default SignUp