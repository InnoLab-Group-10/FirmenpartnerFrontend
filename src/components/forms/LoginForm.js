import React from 'react';
import {Form, Button} from 'react-bootstrap';

const LoginForm = () => {
	return <div>
		<Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label hidden>E-Mail-Adresse</Form.Label>
                <Form.Control type="email" placeholder="E-Mail-Adresse" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label hidden>Passwort</Form.Label>
                <Form.Control type="password" placeholder="Passwort" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                    Anmelden
                </Button>
            </div>
        </Form>
	</div>;
}

export default LoginForm;
