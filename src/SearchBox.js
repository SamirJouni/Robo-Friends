import React from 'react';


const SearchBox = ({searchfield, searchChangeState}) => {

	return (
		<div className='pa2 '>
			<input
			className='pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='Search Robots'
			onChange={searchChangeState}/>
		</div>
	);
}

export default SearchBox;