import React, { createContext, useState } from 'react';

// Create a context to manage search query state
export const SearchContext = createContext();

// Create a provider component to wrap the components where you want to access the search query
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to update the search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
