import React from 'react';
import { Container, Row, Col, Table, Button, Form, FormGroup, Input } from 'reactstrap';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const İletisim = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col className="acilir-menu h1 p-4">İletişim</Col>
				</Row>
				<Row>
					<Col md="12" lg="6" className="pl-5">
						<h3 className="acilir-menu p-2 rounded">İletişim Bilgileri</h3>
						<Table bordered hover responsive style={{ fontSize: 20, color: '#076666' }}>
							<tbody>
								<tr>
									<td style={{ fontSize: 30 }} className="p-4">
										<MdPhone />
									</td>

									<td style={{ textAlign: 'left' }}>
										<h3>Telefon</h3> 0 123 456 78 90
									</td>
								</tr>
								<tr>
									<td style={{ fontSize: 30 }} className="p-4">
										<MdEmail />
									</td>

									<td style={{ textAlign: 'left' }}>
										<h3>E-Mail</h3> yilmaz@deneme.com
									</td>
								</tr>
								<tr>
									<td style={{ fontSize: 30 }} className="p-4">
										<MdLocationOn />
									</td>

									<td style={{ textAlign: 'left' }}>
										<h3>Adres</h3> A caddesi B Sokak Sarız/KAYSERİ
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md="12" lg="6" className="pl-5">
						<h3 className="acilir-menu p-2 rounded">İletişim Formu</h3>
						<Form>
							<FormGroup>
								<Input type="text" name="ad" id="ad" placeholder="İsim/Firma ismi giriniz" />
							</FormGroup>
							<FormGroup>
								<Input type="email" name="email" id="email" placeholder="E-Mail adresiniz" />
							</FormGroup>
							<FormGroup>
								<Input type="tel" name="tel" id="tel" placeholder="Telefon Numaranız" />
							</FormGroup>
							<FormGroup>
								<Input type="text" name="konu" id="konu" placeholder="Konu" />
							</FormGroup>
							<FormGroup>
								<Input type="textarea" name="mesaj" id="mesaj" placeholder="Mesajınız" />
							</FormGroup>
							<Button className="w-100 m-1 p-2">Gönder</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default İletisim;
