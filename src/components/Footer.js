import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<nav className="navbar navbar-expand header justify-content-around">
				<div className="nav-item ">
					<Link to="/" className="nav-link bot-link rounded">
						Anasayfa
					</Link>
				</div>
				<div className="nav-item ">
					<Link to="/hizmetlerimiz" className="nav-link bot-link rounded">
						Hizmetlerimiz
					</Link>
				</div>
				<div className="nav-item ">
					<Link to="/iletisim" className="nav-link bot-link rounded">
						İletişim
					</Link>
				</div>
			</nav>
			<nav className="navbar navbar-expand header  justify-content-around">
				<div className="nav-item  text-light">Her hakkı saklıdır. Abdullah Yılmaz.</div>
			</nav>
		</>
	);
};

export default Footer;
