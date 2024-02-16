import React, { useState} from 'react';
import axios from 'axios';


let formStateData = {
    regno: '',
    stname: '',
    std: '',
    english: '',
    malayalam:'',
    maths:'',
};

function MarkEntry() {

    const [formData, setFormData] = useState(formStateData);
    const [isSubmitting, setIsSubmitting]= useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try{
        const response = await axios.post('http://localhost:4000/markentry', formData);
        console.log(response.data);
        alert("submitted");
        setFormData({regno: '', stname:'', std: '', english: '', malayalam: '', maths:''});
        }catch(error){
            setError(error.message);
        }finally{
            
            setIsSubmitting(false)
        }
     };

      return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className= "bg-white p-3 rounded w-25 bd-highlight">
            <h2> Mark Entry for Students</h2>
            <form  onSubmit={handleSubmit} >
                     <div className='mb-3'>
                    <label htmlFor='regno'>
                        <strong>Register No.</strong>
                    </label>
                    <input type="text"
                     name="regno"
                     value= {formData.regno}
                    placeholder='Enter Register No.'
                    autoComplete='off'
                    className='form-control rounded-0'
                    onChange={handleInputChange}  />
                </div>
                <div className='mb-3'>
                    <label htmlFor='stname'>
                        <strong>Name</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name="stname"
                    value={formData.stname}
                    className='form-control rounded-0'
                    onChange={handleInputChange} />

                </div>
                <div className='mb-3'>
                    <label htmlFor='std'>
                        <strong>Standard</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Standard'
                    autoComplete='off'
                    name="std"
                    value={formData.std}
                    className='form-control rounded-0'
                    onChange={handleInputChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='english'>
                        <strong>English</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter English Mark'
                    autoComplete='off'
                    name="english"
                    value={formData.english}
                    className='form-control rounded-0'
                    onChange={handleInputChange}  />
                </div>

                <div className='mb-3'>
                    <label htmlFor='malayalam'>
                        <strong>Malayalam</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Malayalam Mark'
                    autoComplete='off'
                           
                    name="malayalam"
                    value={formData.malayalam}
                    className='form-control rounded-0'
                    onChange={handleInputChange}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='maths'>
                        <strong>Maths</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Maths Mark'
                    autoComplete='off'
                   
                    name="maths"
                    value= {formData.maths}
                    className='form-control rounded-0'
                    onChange={handleInputChange} />
                </div>
                <button type="submit" disabled= {isSubmitting} className='btn btn-success w-50 rounded-0'>
                    {isSubmitting ? 'submitting...' : 'Submit'}
                    </button>
                {error && <div className='error'>{error}</div>}
                </form>

               

                
        </div>

    </div>
  );
     }


export default MarkEntry