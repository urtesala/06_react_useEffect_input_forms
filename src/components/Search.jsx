import { useState } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  // padaryti kad veiktu isSearchValueEmpty
  const isSearchValueEmpty = true;

  function inputHandler(event) {
    // console.log('event ===', event);
    // console.log('event.target.value ===', event.target.value);
    //^ one way input binding
    const enteredValue = event.target.value;
    // if (enteredValue === '') return;
    setSearchValue(enteredValue);
  }

  console.log('searchValue ===', searchValue);

  return (
    <fieldset>
      <legend>Search</legend>
      {/* //^ two way binding input */}
      <input
        // onChange={(event) => setSearchValue(event.target.value)}
        onChange={inputHandler}
        value={searchValue}
        type='search'
      />
      <button>Search</button>
      {/* rodyti priklausomai nuo isSearchValueEmpty */}
      {/* ideti ko buvo ieskoma i koieskojau */}
      <h3>You have searched for: koieskojau</h3>
    </fieldset>
  );
}
export default Search;