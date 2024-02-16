
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchResult = ({ results }) => {
  return (
   
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <h2>Search Results</h2>
      <table className='table'>
           <tbody>
          {
            results.map((result) => {
              return(
             <>
        <tr> <th>Reg.No</th> <td>{result.regno}</td></tr>
               <tr>   <th>St. Name</th> <td>{result.stname}</td></tr>
              <tr>    <th>Standard</th> <td>{result.std}</td></tr>
                <tr>  <th>English</th>  <td>{result.english}</td></tr>
              <tr>    <th>Malayalam</th>  <td>{result.malayalam}</td></tr>
               <tr>   <th>Maths</th>   <td>{result.maths}</td></tr>
              
               </>
              )
            })
          }
        </tbody>

      </table>

 
      </div>
    </div>

  );

        }
export default SearchResult;
