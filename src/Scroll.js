import React from 'react';


const Scroll = (props) => {
	return (
		<div style={{ height: '55vh', overflowY: 'scroll'}}>
			{props.children}
		</div>
	);
}

export default Scroll;