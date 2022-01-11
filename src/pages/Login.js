import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import LoginForm from '../components/forms/LoginForm.js';
// import Alerts from '../components/Alerts.js';
import './Login.css';
import logo from "../media/fh_technikum_wien_logo_4c_2020.svg";

const Login = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col className='login-form'>
						<Card>
							<Card.Body>
								<Image src={logo} fluid />
								<LoginForm />
								{/*
								<Alerts variant='success' />
								<Alerts variant='warning' />
								<Alerts variant='danger' />
								*/}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
