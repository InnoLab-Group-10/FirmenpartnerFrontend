import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'
import { BiTrash, BiPencil, BiReset } from 'react-icons/bi';

const UserRow = props => {
	const user = props.entry;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<tr>
				<td>{user.username}</td>
				<td>{user.roles.toString()}</td>
				<td>{user.email}</td>
				<td className="table-icon-column-three-icons">
					<Button variant="danger"
							className="table-icons table-delete-icon"
							onClick={handleShow}
					>
						<BiTrash/>
					</Button>
					<Button variant="secondary" className="table-icons">
						<BiReset/>
					</Button>
					<Button variant="secondary" className="table-icons">
						<BiPencil/>
					</Button>
				</td>
			</tr>
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

export default UserRow;
