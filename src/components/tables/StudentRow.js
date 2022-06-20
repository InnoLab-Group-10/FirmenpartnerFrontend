import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';

const StudentRow = props => {
	const [open, setOpen] = useState(false);
	const student = props.entry;

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
					<Button variant="danger" className="table-icons table-delete-icon">
						<BiTrash/>
					</Button>
					<Button variant="secondary" className="table-icons">
						<BiPencil/>
					</Button>
				</td>
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text' className="detailed-row">
					<td colSpan='1'>
						<strong>Notiz:</strong>
					</td>
					<td colSpan='3'>{student.notes}</td>
				</tr>
			</Collapse>
		</>
	);
};

export default StudentRow;
