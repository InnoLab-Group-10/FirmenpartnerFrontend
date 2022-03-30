import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

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
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text'>
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
