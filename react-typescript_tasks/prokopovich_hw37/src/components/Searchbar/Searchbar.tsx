import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="Searchbar-container">
      <input
        value={query}
        id="Searchbar"
        className="Searchbar"
        placeholder="Search..."
        type="text"
        onChange={(el) => setQuery(el.target.value)}
      ></input>
      <span
        className="material-symbols-outlined btn-closed"
        onClick={() => setQuery('')}
      >
        close
      </span>
    </div>
  );
};

export default Searchbar;
