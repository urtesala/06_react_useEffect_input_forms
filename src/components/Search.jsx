import { useState } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchDone, setSearchDone] = useState(false);

  // padaryti kad veiktu isSearchValueEmpty
  const isSearchValueEmpty = searchValue === '' ? true : false;
  // kiti varijantai tam paciam tikslui
  // const isSearchValueEmpty = searchValue.length === 0 ? true : false;
  // const isSearchValueEmpty = searchValue.length ? false : true;
  // const isSearchValueEmpty = !searchValue.length;

  function inputHandler(event) {
    // console.log('event ===', event);
    // console.log('event.target.value ===', event.target.value);
    //^ one way input binding
    const enteredValue = event.target.value;
    // if (enteredValue === '') return;
    setSearchValue(enteredValue);
    // paslepti sent message
    // setSearchDone(false);
  }

  function searchHandler() {
    // when user pressed search
    const newSearchObj = { term: searchValue.trim() };
    // siusti paieskos objekta, {term: <paieskosReiksme>}
    console.log('newSearchObj ===', newSearchObj);
    // isvalyti paieskos lauka
    setSearchValue('');
    // atvaizduoti ko ieskojom
    setSearchDone(true);
  }

  // console.log('searchValue ===', searchValue);

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
      <button onClick={searchHandler}>Search</button>
      {/* rodyti priklausomai nuo isSearchValueEmpty */}
      {/* ideti ko buvo ieskoma i koieskojau */}
      {!isSearchValueEmpty && <h3>You have entered: {searchValue}</h3>}
      {searchDone && isSearchValueEmpty && <h3>Your search was sent</h3>}
    </fieldset>
  );
}
export default Search;