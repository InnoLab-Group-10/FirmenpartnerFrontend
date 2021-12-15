import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import LoginForm from '../components/forms/LoginForm.js';
import Alerts from '../components/Alerts.js';

import './Login.css';

const Login = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col className='login-form'>
						<Card>
							<Card.Body>
								<Image src='holder.js/100px250' fluid />
								<h1>Überschrift</h1>
								<p>
									Lorem ipsum dolor sit amet, consetetur
									sadipscing elitr, sed diam nonumy eirmod
									tempor invidunt ut l.
								</p>
								<LoginForm />
								<Alerts variant="success"/>
								<Alerts variant="warning"/>
								<Alerts variant="danger"/>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
