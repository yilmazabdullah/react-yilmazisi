import React from 'react';
import { Link } from 'react-router-dom';

const Resim = ({ klas, title, subtitle, btn }) => {
	return (
		<>
			<div className={klas}>
				<div className="d-flex justify-content-center ">
					<div className="resim-ici-banner rounded">
						<div className="container mt-5 pl-5 text-light">
							<h1>{title} </h1>
							<p>{subtitle} </p>
							<Link to={btn === 'Anasayfa' ? '/' : '/' + btn} className="btn btn-dark">
								{btn}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Resim.defaultProps = {
	title: 'Anasayfa',
	subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	klas: 'giris',
	btn: 'Anasayfa',
};
export default Resim;
