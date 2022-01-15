import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PartnerRow = props => {
	const [open, setOpen] = useState(false);
	const { company, contacts, locations } = props.entry;

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
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text'>
					<td colSpan='1'>
						<strong>Anschrift:</strong>
						<br />
						<strong>Studierende:</strong>
						<br />
						<strong>Notiz:</strong>
					</td>
					<td colSpan='3'>
						{locations[0].address}, {locations[0].zipcode}, {locations[0].city}
						<br />
						{company.maxStudents} pro Jahr
						<br />
						Beispieltext
					</td>
				</tr>
			</Collapse>
		</>
	);
};

export default PartnerRow;
