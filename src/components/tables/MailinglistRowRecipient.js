import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { mailingListDeleteRecipient } from '../../store/mailinglist-thunks';

const MailinglistRowRecipient = props => {
	const { entry, mailinglistId } = props;
	const dispatch = useDispatch();

	const [showDelete, setDeleteShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(mailingListDeleteRecipient({ id: entry.id, mailinglistId }));
		toggleDeleteShow();
	};

	return (
		<>
			<tr>
				<td>{entry.company}</td>
				<td>
					{entry.firstName} {entry.lastName}
				</td>
				<td>{entry.email}</td>
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

			{/* Delete Confirmation Modal */}
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
		</>
	);
};

export default MailinglistRowRecipient;
