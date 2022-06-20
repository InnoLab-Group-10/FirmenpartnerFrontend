import React, { useState } from 'react';
import { Collapse, Button, Modal } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';

const PartnerRow = props => {
	const [open, setOpen] = useState(false);
	const { company, contacts, locations } = props.entry;

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

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
				<td className="table-icon-column-two-icons">
					<Button variant="danger"
							className="table-icons table-delete-icon"
							onClick={handleShow}		
					>
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
						<strong>Anschrift:</strong>
						<br />
						<strong>Studierende:</strong>
						<br />
						<strong>Notiz:</strong>
					</td>
					<td colSpan='4'>
						{locations.length !== 0 ? (
							<>
								{locations[0].address}, {locations[0].zipcode}, {locations[0].city}
								<br />
								{company.maxStudents} pro Jahr
								<br />
								{company.notes}
							</>
						) : (
							<>
								N/A, N/A, N/A
								<br />
								N/A pro Jahr
								<br />
								N/A
							</>
						)}
					</td>
				</tr>
			</Collapse>
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
					Sind Sie sicher dass Sie "Benutzername" entfernen möchten?
				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Abbrechen
				</Button>
				<Button variant="danger">Löschen</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default PartnerRow;
