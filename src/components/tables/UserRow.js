import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil, BiReset } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { userDelete } from '../../store/user-thunks';

import CreateUserForm from '../forms/CreateUserForm';

const UserRow = props => {
	const user = props.entry;
	const dispatch = useDispatch();

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(userDelete({ id: user.id }));
		toggleDeleteShow();
	};

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
						onClick={toggleDeleteShow}
					>
						<BiTrash />
					</Button>
					<Button variant='secondary' className='table-icons'>
						<BiReset />
					</Button>
					<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
						<BiPencil />
					</Button>
				</td>
			</tr>
			{/* Delete Confirmation Modal */}
			<Modal show={showDelete} onHide={toggleDeleteShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "{user.username}" entfernen möchten?
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
			<Modal show={showEdit} onHide={toggleEditShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Benutzer bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CreateUserForm />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={toggleEditShow}>
						Abbrechen
					</Button>
					<Button variant='primary'>Speichern</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default UserRow;
