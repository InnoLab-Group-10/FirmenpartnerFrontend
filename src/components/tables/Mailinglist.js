import React, { useEffect, useState, useRef } from 'react';
import {
	Card,
	Container,
	Row,
	Col,
	Table,
	Button,
	Popover,
	Overlay,
} from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { mailinglistGetAll } from '../../store/mailinglist-thunks';
import { companyGetAll } from '../../store/company-thunks';
import MailinglistRow from './MailinglistRow';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const Mailinglist = () => {
	const dispatch = useDispatch();
	const { mailinglists, shouldReload } = useSelector(state => state.mailinglist);
	const { companies, activeCompanies, inactiveCompanies } = useSelector(
		state => state.company
	);
	const {
		sortedArray: sortedMailingLists,
		setSortedArray: setSortedMailingLists,
		sortHandler,
	} = useSort();

	useEffect(() => {
		if (shouldReload) {
			dispatch(mailinglistGetAll());
			dispatch(companyGetAll());
			setSortedMailingLists(null);
		}
	}, [dispatch, shouldReload, setSortedMailingLists]);

	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = event => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<Container className='document-table'>
			<Card>
				<Card.Header>
					<Row>
						<Col>Mailinglisten</Col>
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
										<Popover.Header as='h3'>Mailinglisten</Popover.Header>
										<Popover.Body>
											Die Listen "Alle Unternehmen", "Aktive Unternehmen" und "Inaktive
											Unternehmen" werden automatisch basierend auf den Einträgen in der
											Partnerliste zusammen gestellt und könne hier nicht gelöscht oder
											bearbeitet werden. Die selbsterstellten Listen können ausgeklappt,
											bearbeitet und gelöscht werden. Einzelne Einträche lassen sich
											ebenfalls nachträglich bearbeiten und löschen.
										</Popover.Body>
									</Popover>
								</Overlay>
							</div>
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
										onClick={() =>
											sortHandler([...mailinglists], 'name', SORT_OPTIONS.ALPHABET)
										}
									>
										Listenname
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											sortHandler([...mailinglists], 'entries', SORT_OPTIONS.LENGTH)
										}
									>
										Einträge
										<BiSortDown className='sort-icon' />
										<BiSortUp className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							<MailinglistRow
								listName='Alle Unternehmen'
								entries={companies
									.map(entry =>
										entry.contacts.length
											? { ...entry.contacts[0], company: entry.company.name }
											: null
									)
									.filter(entry => entry != null)}
								notEditable={true}
							/>
							<MailinglistRow
								listName='Aktive Unternehmen'
								entries={activeCompanies
									.map(entry =>
										entry.contacts.length
											? { ...entry.contacts[0], company: entry.company.name }
											: null
									)
									.filter(entry => entry != null)}
								notEditable={true}
							/>
							<MailinglistRow
								listName='Inaktive Unternehmen'
								entries={inactiveCompanies
									.map(entry =>
										entry.contacts.length
											? { ...entry.contacts[0], company: entry.company.name }
											: null
									)
									.filter(entry => entry != null)}
								notEditable={true}
							/>
							{sortedMailingLists == null
								? mailinglists.map(entry => (
										<MailinglistRow
											key={entry.id}
											id={entry.id}
											listName={entry.name}
											entries={entry.entries}
											notEditable={false}
										/>
								  ))
								: sortedMailingLists.map(entry => (
										<MailinglistRow
											key={entry.id}
											id={entry.id}
											listName={entry.name}
											entries={entry.entries}
											notEditable={false}
										/>
								  ))}
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default Mailinglist;
