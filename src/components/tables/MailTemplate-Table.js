import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import MailTemplateRow from './MailTemplateRow';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';
import { mailtemplateGetAll } from '../../store/mailtemplate-thunks';

const MailTemplateTable = () => {
	const dispatch = useDispatch();

	const { mailtemplates, shouldReload } = useSelector(state => state.mailtemplate);

	const {
		sortedArray: sortedMailtemplates,
		setSortedArray: setSortedMailtemplates,
		sortHandler,
	} = useSort();

	useEffect(() => {
		if (shouldReload) {
			dispatch(mailtemplateGetAll());
			setSortedMailtemplates(null);
		}
	}, [dispatch, shouldReload, setSortedMailtemplates]);

	return (
		<Container className='document-table'>
			<Card>
				<Card.Header>
					<Row>
						<Col>Vorlagen</Col>
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
											sortHandler([...mailtemplates], 'name', SORT_OPTIONS.ALPHABET)
										}
									>
										Template Name
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							{sortedMailtemplates
								? sortedMailtemplates.map(entry => (
										<MailTemplateRow key={entry.id} entry={entry} />
								  ))
								: mailtemplates.map(entry => (
										<MailTemplateRow key={entry.id} entry={entry} />
								  ))}
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default MailTemplateTable;
