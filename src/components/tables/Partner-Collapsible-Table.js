import React, { useEffect, useState, useRef } from 'react';
import {
	Container,
	Table,
	Card,
	Col,
	Row,
	Button,
	Popover,
	Overlay,
} from 'react-bootstrap';
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

	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = event => {
		setShow(!show);
		setTarget(event.target);
	};

	const handleNAforSort = arr => {
		return arr.map(entry => ({
			...entry,
			locations: entry.locations.length
				? entry.locations
				: [{ address: 'N/A', city: 'N/A', zipcode: 'N/A' }],
			contacts: entry.contacts.length
				? entry.contacts
				: [{ firstName: 'N/A', lastName: 'N/A', email: 'N/A', phone: 'N/A' }],
		}));
	};

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Partnerunternehmen</Col>
						<Col>
							<div ref={ref}>
								<div onClick={handleClick}>
									<BiInfoCircle className='info-button' />
								</div>
								<Overlay
									show={show}
									target={target}
									placement='left'
									container={ref}
									containerPadding={20}
								>
									<Popover>
										<Popover.Header as='h3'>Partnerübersicht</Popover.Header>
										<Popover.Body>
											Die wichtigsten Informationen findet man auf dem ersten Blick. Für
											weitere Informationen lassen sich die Tabellenreihen ausklappen.
										</Popover.Body>
									</Popover>
								</Overlay>
							</div>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Title>Partnerfirmenliste</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						Filtern, Bearbeiten und Löschen von Partnerunternehmen
					</Card.Subtitle>
					<Card.Text>
						In der Partnerfirmenliste können Sie Partnerfirmen bearbeiten und löschen.
						Wenn Sie eine bestimme Firma finden möchten, können Sie die Liste
						alphabetisch, nach dem Partner, der Ansprechperson, der E-Mail oder der
						Telefonnummer umsortieren.
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
											customSortHandler(handleNAforSort(companies), (a, b) =>
												`${a.contacts[0].firstName} ${a.contacts[0].lastName}`.localeCompare(
													`${b.contacts[0].firstName} ${b.contacts[0].lastName}`
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
											customSortHandler(handleNAforSort(companies), (a, b) =>
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
											customSortHandler(handleNAforSort(companies), (a, b) =>
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
			</Card>
		</Container>
	);
};

export default CollapsibleTable;
