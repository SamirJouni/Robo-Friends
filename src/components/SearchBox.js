import React from 'react';

const SearchBox = ({searchfield, searchChangeState}) => {

  const placeholder = 'Search Robots';

  return (
    <div className='pa2 '>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder={placeholder}
        onFocus={(event) => event.target.placeholder = ''}
        onBlur={(event) => event.target.placeholder = placeholder}
        onChange={searchChangeState}/>
    </div>
  );
}

export default SearchBox;