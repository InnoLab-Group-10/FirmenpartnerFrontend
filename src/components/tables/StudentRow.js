import React, { useState } from 'react';
import { Collapse, Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';
import EditStudentForm from '../forms/EditStudentForm';

const StudentRow = props => {
	const [open, setOpen] = useState(false);
	const student = props.entry;

	const [show, setShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleEditClose = () => setEditShow(false);
	const handleEditShow = () => setEditShow(true);

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
				<td className="table-icon-column-two-icons">
					<Button 
						variant="danger" 
						className="table-icons table-delete-icon"
						onClick={handleShow}
					>
						<BiTrash/>
					</Button>
					<Button 
						variant="secondary" 
						className="table-icons"
						onClick={handleEditShow}	
					>
						<BiPencil/>
					</Button>
				</td>
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text' className="detailed-row">
					<td colSpan='1'>
						<strong>Notiz:</strong>
					</td>
					<td colSpan='4'>{student.notes}</td>
				</tr>
			</Collapse>
			
			{/* Delete Confirmation Modal */}
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
				<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "Studierendenname" entfernen möchten?
				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Abbrechen
				</Button>
				<Button variant="danger">Löschen</Button>
				</Modal.Footer>
			</Modal>
			{/* Edit Form Modal */}
			<Modal
				size="xl"
				show={showEdit}
				onHide={handleEditClose}
				keyboard={false}
			>
				<Modal.Header closeButton>
				<Modal.Title>Studierende bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditStudentForm/>
				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleEditClose}>
					Abbrechen
				</Button>
				<Button variant="primary">Speichern</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default StudentRow;
