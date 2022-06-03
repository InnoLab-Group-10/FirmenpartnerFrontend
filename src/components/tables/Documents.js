import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import DocumentRow from './DocumentRow';
import { fileGetAll } from '../../store/file-thunks';

const Documents = () => {
	const dispatch = useDispatch();
	const { files, shouldReload } = useSelector(state => state.file);

	useEffect(() => {
		if (shouldReload) {
			dispatch(fileGetAll());
		}
	}, [dispatch, shouldReload]);

	return (
		<Container className='document-table'>
			<Card>
				<Card.Header>
					<Row>
						<Col>Dokumente</Col>
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
									<Button className='sort-icon-single' variant='light'>
										<BiSortDown className='sort-icon-center' />
										<BiSortUp className='sort-icon-center' hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										Dateiname
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										Änderungsdatum
										<BiSortDown className='sort-icon' />
										<BiSortUp className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							{files.map(entry => (
								<DocumentRow key={entry.id} entry={entry} />
							))}
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default Documents;
