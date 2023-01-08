import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { mailinglistGetAll } from '../../store/mailinglist-thunks';
import { companyGetAll } from '../../store/company-thunks';
import MailinglistRow from './MailinglistRow';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const Mailinglist = () => {
	const dispatch = useDispatch();
	const { mailinglists, shouldReload } = useSelector(state => state.mailinglist);
	const { companies } = useSelector(state => state.company);
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
											sortHandler([...mailinglists], 'name', SORT_OPTIONS.ALPHABET)
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
								listName='Inaktive Unternehmen'
								entries={[]}
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
