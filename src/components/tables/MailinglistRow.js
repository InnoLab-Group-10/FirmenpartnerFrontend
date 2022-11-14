import React, { useState } from 'react';
import { Collapse, Button, Modal, Table } from 'react-bootstrap';
import { BiTrash, BiPlus, BiMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { companyDelete } from '../../store/company-thunks.js';
import EditPartnerForm from '../forms/EditPartnerForm.js';

const MailinglistRow = props => {
	const entry = props.entry;
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	// const { company, contacts, locations } = props.entry;

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(companyDelete({ id: entry.company.id }));
		toggleDeleteShow();
	};

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
				        <td>{props.listName}</td>
						<td>{props.listSize}</td>
            			<td className='table-icon-column-two-icons'>
					<Button
						variant='danger'
						className='table-icons table-delete-icon'
						onClick={toggleDeleteShow}
						hidden={props.notEditable}
					>
						<BiTrash />
					</Button>
					<Button variant='secondary' className='table-icons' onClick={toggleEditShow} hidden={props.notEditable}>
						<BiPlus />
					</Button>
				</td>
			</tr>
			<Collapse in={open}>
				<tr id='example-collapse-text' className='detailed-row mailing-row'>
                    <td colSpan="3">
					<Table>
                        <thead>
                            <tr>
                                <th>Firma</th>
                                <th>Ansprechpartner</th>
                                <th>E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
<tr>
    <td>Name</td>
    <td>Vorname Nachname</td>
    <td>test@test.com</td>
    <td hidden={props.notEditable}>
        <Button
			variant='danger'
			className='table-icons table-delete-icon mailing-row-icon'
			onClick={toggleDeleteShow}
		>
			<BiMinus />
		</Button>
    </td>
</tr>
                        </tbody>
                    </Table>
                    </td>
				</tr>
			</Collapse>

			{/* Delete Confirmation Modal */}
			<Modal show={showDelete} onHide={toggleDeleteShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "Test" entfernen möchten?
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
					<Modal.Title>Empfänger hinzufügen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					
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

export default MailinglistRow;
