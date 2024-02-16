
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [regno, setRegno] = useState('');

  const handleSearch = () => {
    onSearch(regno);
  };

  return (
   
    <div className="d-flex flex-column bd-highlight  justify-content-center align-items-center vh-80">
   <div className='p-3 h2'>Examination Results</div>
   <div className= "bg-success p-3 rounded w-25">
    
      <input
        type="text"
        placeholder="Enter Register No"
        value={regno}
        onChange={(e) => setRegno(e.target.value)}
      />
     
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
 

   );
};

export default SearchForm;
