import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/searchform';
import SearchResult from '../components/searchresult';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (regno) => {
    try {
      const response = await axios.get(`http://localhost:4000/searchmarks?regno=${regno}`);
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching marks:', error);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <SearchResult results={searchResults} />
    </div>
  );
};

export default App;
