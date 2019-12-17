import React from 'react';

const SearchBar = (props) => {
  console.log(props)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphabet} onChange={() => props.toggleSort("alphabetSort")}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.price} onChange={(event) => props.toggleSort("priceSort")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
