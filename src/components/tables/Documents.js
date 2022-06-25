import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import DocumentRow from './DocumentRow';
import { fileGetAll } from '../../store/file-thunks';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const Documents = () => {
	const dispatch = useDispatch();
	const { files, shouldReload } = useSelector(state => state.file);
	const {
		sortedArray: sortedFiles,
		setSortedArray: setSortedFiles,
		sortHandler,
		customSortHandler,
	} = useSort();

	useEffect(() => {
		if (shouldReload) {
			dispatch(fileGetAll());
			setSortedFiles(null);
		}
	}, [dispatch, shouldReload, setSortedFiles]);

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
									<Button
										className='sort-icon-single'
										variant='light'
										onClick={() =>
											customSortHandler([...files], (a, b) =>
												a.name
													.split('.')[1]
													.toLowerCase()
													.localeCompare(b.name.split('.')[1].toLowerCase())
											)
										}
									>
										<BiSortDown className='sort-icon-center' />
										<BiSortUp className='sort-icon-center' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() => sortHandler([...files], 'name', SORT_OPTIONS.ALPHABET)}
									>
										Dateiname
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											sortHandler([...files], 'timestamp', SORT_OPTIONS.TIMESTAMP)
										}
									>
										Datum
										<BiSortDown className='sort-icon' />
										<BiSortUp className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							{sortedFiles
								? sortedFiles.map(entry => <DocumentRow key={entry.id} entry={entry} />)
								: files.map(entry => <DocumentRow key={entry.id} entry={entry} />)}
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default Documents;
