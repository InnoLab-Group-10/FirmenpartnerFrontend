import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Accordion,
	OverlayTrigger,
	Popover,
} from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import CreateUserForm from './CreateUserForm';

const TooltipOverlay = props => (
	<Popover id='popover-basic'>
		<Popover.Header as='h3'>{props.title}</Popover.Header>
		<Popover.Body>{props.text}</Popover.Body>
	</Popover>
);

const AccordionUserMenu = () => {
	return (
		<>
			<Container>
				<Card>
					<Card.Header>
						<Row>
							<Col>Benutzer anlegen</Col>
							<Col>
								<OverlayTrigger
									trigger='hover'
									placement='right'
									overlay={<TooltipOverlay title='Test' text='test' />}
								>
									<BiInfoCircle className='info-button' />
								</OverlayTrigger>
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
