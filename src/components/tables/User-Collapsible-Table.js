import React from 'react';
import { Container, Table, Card, Col, Row, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';

import 'bootstrap/js/src/collapse.js';
import UserRow from './UserRow';

const CollapsibleTable = () => {
	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Benutzer</Col>
						<Col>
							<BiInfoCircle className='info-button'></BiInfoCircle>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Title>Überschrift</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>Subheader</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the
						card's content.
					</Card.Text>
					<Table hover responsive>
						<thead>
							<tr>
								<th>
									<Button variant='light'>
										Benutzer
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										Rolle
										<BiSortDown className='sort-icon' />
										<BiSortUp hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										E-Mail
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>Passwort</th>
							</tr>
						</thead>
						<tbody>
							<UserRow
								username='Testname'
								userrole='Tester'
								useremail='name@name.name'
								text='text'
							/>
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default CollapsibleTable;
