import React from 'react';
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';

const LoginForm = () => {
	return (
		<Container>
			<Form>
				<FloatingLabel
					controlId="floatingInput"
					label="E-Mail-Adresse"
					className="mb-3"
				>
					<Form.Control type="email" placeholder="name@example.com" />
				</FloatingLabel>
				<FloatingLabel controlId="floatingPassword" label="Passwort">
					<Form.Control type="password" placeholder="Passwort" />
				</FloatingLabel>
				<div className='d-grid gap-2'>
					<Button variant='primary' type='submit'>
						Anmelden
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default LoginForm;
