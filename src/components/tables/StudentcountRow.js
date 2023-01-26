import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { studentcountDelete } from '../../store/studentcount-thunks';
import EditStudentcountForm from '../forms/EditStudentcountForm';

const StudentcountRow = props => {
	const { entry, companyId } = props;
	const dispatch = useDispatch();

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(studentcountDelete({ id: entry.id }));
		toggleDeleteShow();
	};

	return (
		<>
			<tr>
				<td>{entry.year}</td>
				<td>{entry.count}</td>
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
				<Modal.Body>Sind Sie sicher dass Sie den Eintrag entfernen möchten?</Modal.Body>
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
					<Modal.Title>Eintrag bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditStudentcountForm
						entry={entry}
						companyId={companyId}
						toggleHandler={toggleEditShow}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default StudentcountRow;
