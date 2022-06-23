import React, { useState } from 'react';
import { Collapse, Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import EditStudentForm from '../forms/EditStudentForm';
import { studentDelete } from '../../store/student-thunks';

const StudentRow = props => {
	const student = props.entry;
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(studentDelete({ id: student.id }));
		toggleDeleteShow();
	};

	return (
		<>
			<tr
				onClick={() => setOpen(prevState => !prevState)}
				aria-controls='example-collapse-text'
				aria-expanded={open}
			>
				<td>{student.studentId}</td>
				<td>
					{student.firstName} {student.lastName}
				</td>
				<td>
					{student.program.name}
					{student.semester}
				</td>
				<td>{student.email}</td>
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
					<td colSpan='1'>
						<strong>Notiz:</strong>
					</td>
					<td colSpan='4'>{student.notes}</td>
				</tr>
			</Collapse>

			{/* Delete Confirmation Modal */}
			<Modal show={showDelete} onHide={toggleDeleteShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "{student.firstName} {student.lastName}" entfernen
					möchten?
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
					<Modal.Title>Studierende bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditStudentForm entry={student} toggleHandler={toggleEditShow} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={toggleEditShow}>
						Abbrechen
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default StudentRow;
