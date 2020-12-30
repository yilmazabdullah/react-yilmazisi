import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Container, Row, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../image/Frame 1.svg';
import logo1 from '../image/Frame 2.svg';
import { FaAlignJustify } from 'react-icons/fa';

const Navs = () => {
	const [lg, setLg] = React.useState(logo);
	const [isOpen, setOpen] = React.useState(false);
	React.useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				setOpen(false);
			}
		});
	});

	return (
		<>
			<div className="row nav p-4">
				<div className="col-3">
					<Link to="/">
						<img alt="resim" onMouseOver={() => setLg(logo1)} onMouseOut={() => setLg(logo)} src={lg} />
					</Link>
				</div>
				<div className="d-block d-md-none col p-3" style={{ textAlign: 'right', fontSize: 24 }}>
					<FaAlignJustify className="cursor" onClick={() => setOpen(!isOpen)} />
				</div>

				<div className="col-9 d-none d-md-block">
					<Navbar expand className="justify-content-end">
						<Nav navbar>
							<NavItem>
								<NavLink href="/" className="linklerim p-2 rounded">
									Anasayfa
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/hizmetlerimiz" className="linklerim p-2 rounded">
									Hizmetlerimiz
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/iletisim" className="linklerim p-2 rounded">
									İletişim
								</NavLink>
							</NavItem>
						</Nav>
					</Navbar>
				</div>
			</div>
			<Collapse isOpen={isOpen} className="acilir-menu">
				<Container fluid>
					<Row>
						<Link to="/" className="p-3 rounded   acilan-pencere" onClick={() => setOpen(false)}>
							Anasayfa
						</Link>
					</Row>
					<Row>
						<Link
							to="/hizmetlerimiz"
							className=" p-3 rounded  acilan-pencere"
							onClick={() => setOpen(false)}
						>
							Hizmetlerimiz
						</Link>
					</Row>
					<Row>
						<Link to="/iletisim" className=" p-3 rounded  acilan-pencere" onClick={() => setOpen(false)}>
							İletisim
						</Link>
					</Row>
				</Container>
			</Collapse>
		</>
	);
};

export default Navs;
