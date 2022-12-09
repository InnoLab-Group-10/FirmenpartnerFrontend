import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import MailTemplateRow from './MailTemplateRow';
import { fileGetAll } from '../../store/file-thunks';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const MailTemplateTable = () => {
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
										//onClick={() => sortHandler([...files], 'name', SORT_OPTIONS.ALPHABET)}
									>
										Template Name
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							{/*sortedFiles
								? sortedFiles.map(entry => <MailTemplateRow key={entry.id} entry={entry} />)
								: files.map(entry => <MailTemplateRow key={entry.id} entry={entry} />)*/}

							<MailTemplateRow/>
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default MailTemplateTable;
