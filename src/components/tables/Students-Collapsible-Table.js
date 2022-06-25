import React, { useEffect } from 'react';
import { Container, Table, Card, Col, Row, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/js/src/collapse.js';
import StudentRow from './StudentRow';
import { studentGetAll } from '../../store/student-thunks';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const CollapsibleTable = () => {
	const dispatch = useDispatch();
	const { students, shouldReload } = useSelector(state => state.student);
	const {
		sortedArray: sortedStudents,
		setSortedArray: setSortedStudents,
		sortHandler,
		customSortHandler,
	} = useSort();

	useEffect(() => {
		if (shouldReload) {
			dispatch(studentGetAll());
			setSortedStudents(null);
		}
	}, [dispatch, shouldReload, setSortedStudents]);

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Studierende</Col>
						<Col>
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Title>Studierendenübersicht</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>Filtern, Bearbeiten und Löschen von Studierenden</Card.Subtitle>
					<Card.Text>
						In der Studierendenliste können Sie Studierende bearbeiten und löschen. Wenn Sie einen bestimmen Studierenden finden möchten, können Sie die Liste alphabetisch, nach der Studenten-ID, dem Namen, dem Studiengang oder der E-Mail umsortieren.
					</Card.Text>
					<Table hover responsive>
						<thead>
							<tr>
								<th>
									<Button
										variant='light'
										onClick={() =>
											sortHandler([...students], 'studentId', SORT_OPTIONS.ALPHABET)
										}
									>
										Studenten-ID.
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...students], (a, b) =>
												`${a.firstName} ${a.lastName}`.localeCompare(
													`${b.firstName} ${b.lastName}`
												)
											)
										}
									>
										Name
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...students], (a, b) =>
												`${a.program.name} ${a.semester}`.localeCompare(
													`${b.program.name} ${b.semester}`
												)
											)
										}
									>
										Studiengang
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											sortHandler([...students], 'email', SORT_OPTIONS.ALPHABET)
										}
									>
										E-Mail
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							{sortedStudents
								? sortedStudents.map(entry => <StudentRow key={entry.id} entry={entry} />)
								: students.map(entry => <StudentRow key={entry.id} entry={entry} />)}
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default CollapsibleTable;
