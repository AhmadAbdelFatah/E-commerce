import React, { useState } from "react";
import styles from './SearchBar.module.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
      className={styles.search}
       id="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <label htmlFor="search"></label>
    </form>
  );
};

export default SearchBar;