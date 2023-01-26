import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { contactDelete } from '../../store/contact-thunks';
import EditContactForm from '../forms/EditContactForm';

const ContactRow = props => {
	const { entry } = props;
	const dispatch = useDispatch();

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(contactDelete({ id: entry.id }));
		toggleDeleteShow();
	};

	return (
		<>
			<tr>
				<td>{`${entry.firstName} ${entry.lastName}`}</td>
				<td>{entry.email}</td>
				<td>{entry.phone}</td>
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

			{/* Delete Contact Confirmation Modal */}
			<Modal show={showDelete} onHide={toggleDeleteShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
        Sind Sie sicher dass Sie den Eintrag entfernen möchten?
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
			{/* Edit Contact Form Modal */}
			<Modal size='xl' show={showEdit} onHide={toggleEditShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Kontakt bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditContactForm entry={entry} toggleHandler={toggleEditShow} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ContactRow;
