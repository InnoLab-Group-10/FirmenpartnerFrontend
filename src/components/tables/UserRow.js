import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil, BiReset } from 'react-icons/bi';
import CreateUserForm from '../forms/CreateUserForm';

const UserRow = props => {
	const user = props.entry;
	const [show, setShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleEditClose = () => setEditShow(false);
	const handleEditShow = () => setEditShow(true);

	return (
		<>
			<tr>
				<td>{user.username}</td>
				<td>{user.roles[user.roles.length - 1]}</td>
				<td>{user.email}</td>
				<td className='table-icon-column-three-icons'>
					<Button
						variant='danger'
						className='table-icons table-delete-icon'
						onClick={handleShow}
					>
						<BiTrash />
					</Button>
					<Button variant='secondary' className='table-icons'>
						<BiReset />
					</Button>
					<Button variant='secondary' className='table-icons' onClick={handleEditShow}>
						<BiPencil />
					</Button>
				</td>
			</tr>
			{/* Delete Confirmation Modal */}
			<Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "Benutzername" entfernen möchten?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Abbrechen
					</Button>
					<Button variant='danger'>Löschen</Button>
				</Modal.Footer>
			</Modal>
			{/* Edit Form Modal */}
			<Modal show={showEdit} onHide={handleEditClose} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Benutzer bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CreateUserForm />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleEditClose}>
						Abbrechen
					</Button>
					<Button variant='primary'>Speichern</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default UserRow;
