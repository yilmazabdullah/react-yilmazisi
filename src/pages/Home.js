import React from 'react';
import Resim from '../components/Resim';
import Hizmet from '../components/Hizmet';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../image/eror.jpg';
import img2 from '../image/giris.jpg';
import img3 from '../image/hakkim.jpg';

const Home = () => {
	return (
		<>
			<Resim
				title="Kampanya"
				subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				klas="giris"
				btn="Hizmetlerimiz"
			/>
			<Hizmet />
			<Container fluid>
				<Row>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img1} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img2} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img3} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img1} className="resimler" />
					</Col>
				</Row>
				<Row>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img2} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img3} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img1} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img2} className="resimler" />
					</Col>
				</Row>
				<Row>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img3} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img1} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img2} className="resimler" />
					</Col>
					<Col md="6" sm="12" lg="3">
						<img alt="resim8-" src={img3} className="resimler" />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
