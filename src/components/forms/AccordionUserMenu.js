import React, {useState, useRef} from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Accordion,
	Overlay,
	Popover
} from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import CreateUserForm from './CreateUserForm';

const AccordionUserMenu = () => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};


	return (
		<>
			<Container>
				<Card>
					<Card.Header>
						<Row>
							<Col>Benutzer anlegen</Col>
							<Col>
								<div ref={ref}>
									<div onClick={handleClick} >
										<BiInfoCircle className='info-button'/>
									</div>
									<Overlay
										show={show}
										target={target}
										placement="left"
										container={ref}
										containerPadding={20}
									>
										<Popover>
											<Popover.Header as="h3">
												Benutzer anlegen	
											</Popover.Header>
											<Popover.Body>
												Füllen Sie alle Felder aus und weisen Sie eine Rolle zu.
											</Popover.Body>
										</Popover>
									</Overlay>
								</div>
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
