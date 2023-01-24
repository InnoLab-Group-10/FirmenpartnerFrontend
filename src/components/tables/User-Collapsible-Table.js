import React, { useEffect, useState, useRef } from 'react';
import { Container, Table, Card, Col, Row, Button, Overlay, Popover } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { userGetAll } from '../../store/user-thunks';
import 'bootstrap/js/src/collapse.js';
import UserRow from './UserRow';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const CollapsibleTable = () => {
	const dispatch = useDispatch();
	const { users, shouldReload } = useSelector(state => state.user);
	const {
		sortedArray: sortedUsers,
		setSortedArray: setSortedUsers,
		sortHandler,
		customSortHandler,
	} = useSort();

	useEffect(() => {
		if (shouldReload) {
			dispatch(userGetAll());
			setSortedUsers(null);
		}
	}, [dispatch, shouldReload, setSortedUsers]);

	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Benutzer</Col>
						<Col>
							<div ref={ref}>
									<div onClick={handleClick} >
										<BiInfoCircle className='info-button'/>
									</div>
									<Overlay
										show={show}
										target={target}
										placement="left"
										container={ref}
										containerPadding={20}
									>
										<Popover>
											<Popover.Header as="h3">
												Benutzerübersicht	
											</Popover.Header>
											<Popover.Body>
												Klicken Sie auf die Spaltenüberschriften um die Tabelle zu sortieren.
											</Popover.Body>
										</Popover>
									</Overlay>
								</div>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Title>Benutzerübersicht</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>Filtern, Bearbeiten und Löschen von Benutzern</Card.Subtitle>
					<Card.Text>
					In der Benutzerliste können Sie Benutzer bearbeiten und löschen. Wenn Sie einen bestimmen Benutzer finden möchten, können Sie die Liste alphabetisch, nach dem Namen, der Rolle oder der E-Mail umsortieren.
					</Card.Text>
					<Table hover responsive>
						<thead>
							<tr>
								<th>
									<Button
										variant='light'
										onClick={() =>
											sortHandler([...users], 'username', SORT_OPTIONS.ALPHABET)
										}
									>
										Benutzer
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											customSortHandler([...users], (a, b) =>
												a.roles[a.roles.length - 1].localeCompare(
													b.roles[b.roles.length - 1]
												)
											)
										}
									>
										Rolle
										<BiSortDown className='sort-icon' />
										<BiSortUp hidden />
									</Button>
								</th>
								<th>
									<Button
										variant='light'
										onClick={() =>
											sortHandler([...users], 'email', SORT_OPTIONS.ALPHABET)
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
							{sortedUsers == null
								? users.map(entry => <UserRow key={entry.id} entry={entry} />)
								: sortedUsers.map(entry => <UserRow key={entry.id} entry={entry} />)}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default CollapsibleTable;
