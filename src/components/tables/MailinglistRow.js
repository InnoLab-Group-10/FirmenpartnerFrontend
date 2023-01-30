import React, { useState } from 'react';
import { Collapse, Button, Modal, Table } from 'react-bootstrap';
import { BiTrash, BiPlus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { mailinglistDelete } from '../../store/mailinglist-thunks';
import AddListRecipientForm from '../forms/AddListRecipientForm.js';
import MailinglistRowRecipient from './MailinglistRowRecipient';

const MailinglistRow = props => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const [showDelete, setDeleteShow] = useState(false);
	const [showAdd, setAddShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleAddShow = () => setAddShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(mailinglistDelete({ id: props.id }));
		toggleDeleteShow();
	};

	let activity = '';
	switch (props.activity) {
		case '1':
			activity = 'active-row';
			break;
		case '2':
			activity = 'pending-row';
			break;
		case '0':
			activity = 'deactivated-row';
			break;
		default:
			activity = '';
			break;
	}

	return (
		<>
			<tr
				className={activity}
				onClick={() => setOpen(prevState => !prevState)}
				aria-controls='example-collapse-text'
				aria-expanded={open}
			>
				<td>{props.listName}</td>
				<td>{props.entries.length}</td>
				<td className='table-icon-column-two-icons'>
					<Button
						variant='danger'
						className={`table-icons table-delete-icon ${
							props.notEditable ? 'invisible' : 'visible'
						}`}
						onClick={toggleDeleteShow}
					>
						<BiTrash />
					</Button>
					<Button
						variant='secondary'
						className={`table-icons ${props.notEditable ? 'invisible' : 'visible'}`}
						onClick={toggleAddShow}
					>
						<BiPlus />
					</Button>
				</td>
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text' className='detailed-row mailing-row'>
					<td colSpan='3'>
						<Table>
							<thead>
								<tr>
									<th>Firma</th>
									<th>Ansprechpartner</th>
									<th>E-Mail</th>
								</tr>
							</thead>
							<tbody>
								{props.entries.map(entry => (
									<MailinglistRowRecipient
										key={entry.id}
										entry={entry}
										mailinglistId={props.id}
										notEditable={props.notEditable}
									/>
								))}
							</tbody>
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
					Sind Sie sicher dass Sie {props.listName} entfernen möchten?
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
			<Modal size='xl' show={showAdd} onHide={toggleAddShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Empfänger hinzufügen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddListRecipientForm id={props.id} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={toggleAddShow}>
						Abbrechen
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MailinglistRow;
