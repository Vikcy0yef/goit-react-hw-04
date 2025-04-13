import React from 'react';
import { useState } from 'react';
import {toast} from "react-hot-toast"
import s from "./SearchBar.module.css"
const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      toast.error("Please enter a search term!");
      return;
    }
     onSubmit(trimmedQuery);
  setQuery("");
  }
 
  
  return (
    
          <header className={s.header}>
              <form onSubmit={handleSubmit}>
          <input type="text"
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            value={query}
            onChange={(e) =>setQuery(e.target.value)}
                  />
                  <button type='submit' >Search</button>
              </form>
      </header>
  
  )
}

export default SearchBar
