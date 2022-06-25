import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import CreateUserForm from './CreateUserForm';

const AccordionUserMenu = () => {
	return (
		<>
			<Container>
				<Card>
					<Card.Header>
						<Row>
							<Col>Benutzer anlegen</Col>
							<Col>
								<BiInfoCircle className='info-button' />
							</Col>
						</Row>
					</Card.Header>
					<Accordion flush>
						<Accordion.Item eventKey='0'>
							<Accordion.Header>Anlegen</Accordion.Header>
							<Accordion.Body>
								<CreateUserForm />
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Card>
			</Container>
		</>
	);
};

export default AccordionUserMenu;
