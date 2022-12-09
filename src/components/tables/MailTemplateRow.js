import React, { useState } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { userDelete } from '../../store/user-thunks';

const MailTemplateRow = props => {
	const mailTemplate = props.entry;
	const dispatch = useDispatch();

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(userDelete({ id: mailTemplate.id }));
		toggleDeleteShow();
	};

	return (
		<>
			<tr>
				<td>Template name</td>
				<td className='table-icon-column-three-icons'>
					<Button
						variant='danger'
						className='table-icons table-delete-icon'
						onClick={toggleDeleteShow}
					>
						<BiTrash />
					</Button>
					<Button variant='secondary' className='table-icons'>
						<GrView />
					</Button>
					<Button variant='secondary' className='table-icons' onClick={toggleEditShow}>
						<BiPencil />
					</Button>
				</td>
			</tr>
			{/* Delete Confirmation Modal */}
			<Modal show={showDelete} onHide={toggleDeleteShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Löschen bestätigen</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Sind Sie sicher dass Sie "Template Name" entfernen möchten?
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
			<Modal show={showEdit} onHide={toggleEditShow} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Template bearbeiten</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Col lg>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Template Name</Form.Label>
								<Form.Control type="text"/>
							</Form.Group>
						</Col>
						<Col lg>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Body Text (HTML möglich)</Form.Label>
								<Form.Control as="textarea" rows={10} />
							</Form.Group>
						</Col>
					</Form>
				</Modal.Body>
				<Modal.Footer>	
					<Button variant='secondary' onClick={toggleEditShow}>
						Abbrechen
					</Button>
					<Button variant='primary' onClick={toggleEditShow}>
						Speichern
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MailTemplateRow;
