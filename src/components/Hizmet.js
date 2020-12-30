import React from 'react';
import { Row, Col } from 'reactstrap';
import img1 from '../image/eror.jpg';
import img2 from '../image/giris.jpg';
import img3 from '../image/hakkim.jpg';

const Hizmet = () => {
	return (
		<>
			{' '}
			<div className="container-fluid bg-light">
				<Row>
					<h3 className="m-auto p-3">Hizmetlerimiz</h3>
				</Row>
				<Row>
					<h4 className="m-auto pb-5">7/24 Hizmet Veriyoruz</h4>
				</Row>
				<Row className="p-2">
					<Col lg="4" md="6">
						<img alt="resim8-" src={img1} className="resimler" />
						<h5 className="pt-3">Kalorier Tesisatı</h5>
						<p>
							Kirli su kaçağı ve sızıntılar günüzü zehir edebilir. Su kaçaklarını ve tıklanıkları
							kameralar
						</p>
					</Col>
					<Col lg="4" md="6">
						<img alt="resim8-" src={img2} className="resimler" />
						<h5 className="pt-3">Su Kaçağı </h5>
						<p>
							Kirli su kaçağı ve sızıntılar günüzü zehir edebilir. Su kaçaklarını ve tıklanıkları
							kameralar
						</p>
					</Col>
					<Col lg="4" md="6" className="offset-md-3 offset-lg-0">
						<img alt="resim8-" src={img3} className="resimler" />
						<h5 className="pt-3">Kombi Bakımı</h5>
						<p>
							Kirli su kaçağı ve sızıntılar günüzü zehir edebilir. Su kaçaklarını ve tıklanıkları
							kameralar
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Hizmet;
