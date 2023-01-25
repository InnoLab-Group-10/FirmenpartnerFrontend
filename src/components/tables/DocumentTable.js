import React, { useEffect, useState, useRef } from 'react';
import {
	Card,
	Container,
	Row,
	Col,
	Table,
	Button,
	Overlay,
	Popover,
} from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import DocumentRow from './DocumentRow';
import { fileGetAll } from '../../store/file-thunks';
import useSort, { SORT_OPTIONS } from '../../hooks/useSort';

const DocumentTable = () => {
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
						<Col>Dokumente</Col>
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
										<Popover.Header as='h3'>Dokumente</Popover.Header>
										<Popover.Body>
											Hier werden alle hochgeladenen Dateien aufgelistet. Sie können
											gelöscht und heruntergeladen werden. Diese Dokumente können über das
											E-Mail-System zum Download weitergegeben werden.
										</Popover.Body>
									</Popover>
								</Overlay>
							</div>{' '}
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
			</Card>
		</Container>
	);
};

export default DocumentTable;
