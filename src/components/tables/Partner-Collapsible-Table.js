import React, { useEffect } from 'react';
import { Container, Table, Card, Col, Row, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import PartnerRow from './PartnerRow';
import { useDispatch, useSelector } from 'react-redux';

import { companyGetAll } from '../../store/company-thunks';
import useSort from '../../hooks/useSort';
import 'bootstrap/js/src/collapse.js';

const CollapsibleTable = () => {
	const dispatch = useDispatch();
	const { companies, shouldReload } = useSelector(state => state.company);
	const {
		sortedArray: sortedCompanies,
		setSortedArray: setSortedCompanies,
		customSortHandler,
	} = useSort();

	useEffect(() => {
		if (shouldReload) {
			dispatch(companyGetAll());
			setSortedCompanies(null);
		}
	}, [dispatch, shouldReload, setSortedCompanies]);

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Partnerunternehmen</Col>
						<Col>
							<BiInfoCircle className='info-button' />
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
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...companies], (a, b) =>
												a.company.name.localeCompare(b.company.name)
											)
										}
									>
										Partner
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...companies], (a, b) =>
												`${a.contacts[0].name} ${a.contacts[0].name}`.localeCompare(
													`${b.contacts[0].name} ${b.contacts[0].name}`
												)
											)
										}
									>
										Ansprechperson
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...companies], (a, b) =>
												a.contacts[0].email.localeCompare(b.contacts[0].email)
											)
										}
									>
										E-Mail
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...companies], (a, b) =>
												a.contacts[0].phone.localeCompare(b.contacts[0].phone)
											)
										}
									>
										Telefon
										<BiSortDown className='sort-icon' />
										<BiSortUp hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							{sortedCompanies == null
								? companies.map(entry => (
										<PartnerRow key={entry.company.id} activity='1' entry={entry} />
								  ))
								: sortedCompanies.map(entry => (
										<PartnerRow key={entry.company.id} activity='1' entry={entry} />
								  ))}
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default CollapsibleTable;
