import React from 'react';
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import MailinglistRow from './MailinglistRow';

const Mailinglist = () => {
	return (
		<Container className='document-table'>
			<Card>
				<Card.Header>
					<Row>
						<Col>Mailinglisten</Col>
						<Col>
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Table hover responsive>
						<thead>
							<tr>
								<th>
									<Button
										variant='light'
                                        // onClick={() => sortHandler([...files], 'name', SORT_OPTIONS.ALPHABET)}
									>
										Listenname
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										/*
                                        onClick={() =>
											sortHandler([...files], 'timestamp', SORT_OPTIONS.TIMESTAMP)
										}
                                        */
									>
										Einträge
										<BiSortDown className='sort-icon' />
										<BiSortUp className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							<MailinglistRow listName="Alle Unternehmen" listSize="9999" notEditable={true}/>
                            <MailinglistRow listName="Aktive Unternehmen" listSize="9999" notEditable={true}/>
							<MailinglistRow listName="Inaktive Unternehmen" listSize="9999" notEditable={true}/>
							<MailinglistRow listName="Wiener Unternehmen" listSize="9999" notEditable={false}/>
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default Mailinglist;
