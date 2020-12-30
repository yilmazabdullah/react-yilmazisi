import React from 'react';

import Header from '../components/Header';
import Navs from '../components/Navs';

const Navbars = () => {
	return (
		<>
			<div className="container-fluid  sticky header">
				<div className="d-none d-md-block  text-light">
					<Header />
				</div>
				<Navs />
			</div>
		</>
	);
};

export default Navbars;
