import React, { useEffect, useState, useRef } from 'react';
import { Card, Container, Row, Col, Table, Button, Overlay, Popover } from 'react-bootstrap';
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

	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<Container className='document-table'>
			<Card>
				<Card.Header>
					<Row>
						<Col>Vorlagen</Col>
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
												Vorlagenübersicht											
											</Popover.Header>
											<Popover.Body>
												Hier werden alle Vorlagen aufgelistet. Diese lassen sich bearbeiten, löschen und in einer Vorschau überprüfen.
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
			</Card>
		</Container>
	);
};

export default MailTemplateTable;
