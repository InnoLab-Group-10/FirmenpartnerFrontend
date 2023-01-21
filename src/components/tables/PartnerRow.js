import React, { useState } from 'react';
import { Collapse, Button, Modal, Table } from 'react-bootstrap';
import { BiTrash, BiPencil, BiPlus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { companyDelete } from '../../store/company-thunks.js';
import EditPartnerForm from '../forms/EditPartnerForm.js';

const PartnerRow = props => {
	const entry = props.entry;
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const { company, contacts, locations } = props.entry;

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(companyDelete({ id: entry.company.id }));
		toggleDeleteShow();
	};

	let activity = '';
	if (entry.company.contractSigned) {
		activity = 'active-row';
	} else {
		activity = 'deactivated-row';
	}

	return (
		<>
			<tr
				className={activity}
				onClick={() => setOpen(prevState => !prevState)}
				aria-controls='example-collapse-text'
				aria-expanded={open}
			>
				<td>{company.name}</td>
				{contacts.length !== 0 ? (
					<>
						<td>{`${contacts[0].firstName} ${contacts[0].lastName}`}</td>
						<td>{contacts[0].email}</td>
						<td>{contacts[0].phone}</td>
					</>
				) : (
					<>
						<td>N/A</td>
						<td>N/A</td>
						<td>N/A</td>
					</>
				)}
				<td className='table-icon-column-two-icons'>
					<Button
						variant='danger'
						className='table-icons table-delete-icon'
						onClick={toggleDeleteShow}
					>
						<BiTrash />
					</Button>
					<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
						<BiPencil />
					</Button>
				</td>
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text' className='detailed-row'>
					<td colSpan={5}>
						<Table>
							<tr>
								<td>
									<Table>
										<tbody>
											<tr>
												<td>
													<strong>Anschrift:</strong>
												</td>
												<td>
													{locations.length !== 0
												? `${locations[0].address}, ${locations[0].zipcode}, ${locations[0].city}`
												: 'N/A, N/A, N/A'}
												</td>
											</tr>
											<tr>
												<td>
													<strong>Studierende:</strong>
												</td>
												<td>
													{company.maxStudents} pro Jahr
												</td>
											</tr>
											<tr>
												<td>
													<strong>Notiz:</strong>
												</td>
												<td>
													{company.notes}
												</td>
											</tr>									
										</tbody>
									</Table>
								</td>
							</tr>
							<tr>
								<td>
									<Table>
										<thead>
											<tr>
												<td><strong>AnsprechpartnerIn</strong></td>
												<td><strong>E-Mail</strong></td>
												<td><strong>Telefonnummer</strong></td>
												<td>
													<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
														<BiPlus />
													</Button>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													Vorname Nachname
												</td>
												<td>
													text@test.test
												</td>
												<td>
													+43 (0) 000 000 00 00
												</td>
												<td>
													<Button
														variant='danger'
														className='table-icons table-delete-icon'
														onClick={toggleDeleteShow}
													>
														<BiTrash />
													</Button>
													<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
														<BiPencil />
													</Button>
												</td>
											</tr>
										</tbody>
									</Table>
								</td>
							</tr>
							<tr>
								<td>
									<Table>
										<thead>
											<tr>
												<td><strong>Jahr</strong></td>
												<td><strong>Aufgenommene Studierende</strong></td>
												<td>
													<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
														<BiPlus />
													</Button>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													2018
												</td>
												<td>
													99
												</td>
												<td>
													<Button
														variant='danger'
														className='table-icons table-delete-icon'
														onClick={toggleDeleteShow}
													>
														<BiTrash />
													</Button>
													<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
														<BiPencil />
													</Button>
												</td>
											</tr>
										</tbody>
									</Table>
								</td>
							</tr>
						</Table>
					</td>
				</tr>
			</Collapse>

			{/* Delete Confirmation Modal */}
			<Modal show={showDelete} onHide={toggleDeleteShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "{entry.company.name}" entfernen möchten?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={toggleDeleteShow}>
						Abbrechen
					</Button>
					<Button variant='danger' onClick={handleDelete}>
						Löschen
					</Button>
				</Modal.Footer>
			</Modal>
			{/* Edit Form Modal */}
			<Modal size='xl' show={showEdit} onHide={toggleEditShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Partnerfirma bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditPartnerForm entry={entry} toggleHandler={toggleEditShow} />
				</Modal.Body>
			</Modal>
			{/* Add Contactperson Modal */}
			<Modal size='xl' show={showEdit} onHide={toggleEditShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ansprechperson hinzufügen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Formular Vorname, Nachname, Email, Nummer
				</Modal.Body>
			</Modal>
			{/* Add Students Per Year Modal */}
			<Modal size='xl' show={showEdit} onHide={toggleEditShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Studierende pro Jahr</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Jahr, Anzahl
				</Modal.Body>
			</Modal>
		</>
	);
};

export default PartnerRow;
