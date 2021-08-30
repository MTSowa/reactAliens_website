import React from 'react';
import './search.css';

const Search = (props) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
