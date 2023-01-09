import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

import { mailtemplateDelete, mailtemplateUpdate } from '../../store/mailtemplate-thunks';

const MailTemplateRow = props => {
	const { entry } = props;
	const dispatch = useDispatch();

	const [showDelete, setDeleteShow] = useState(false);
	const [showEdit, setEditShow] = useState(false);

	const toggleDeleteShow = () => setDeleteShow(prevState => !prevState);
	const toggleEditShow = () => setEditShow(prevState => !prevState);

	const handleDelete = () => {
		dispatch(mailtemplateDelete({ id: entry.id }));
		toggleDeleteShow();
	};

	// update template
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: { name: entry.name, content: entry.content } });

	return (
		<>
			<tr>
				<td>{entry.name}</td>
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
				<Modal.Body>Sind Sie sicher dass Sie {entry.name} entfernen möchten?</Modal.Body>
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
				<Form
					onSubmit={handleSubmit(data =>
						dispatch(mailtemplateUpdate({ id: entry.id, ...data }))
					)}
				>
					<Modal.Header closeButton>
						<Modal.Title>Template bearbeiten</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Col lg>
							<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
								<Form.Label>Template Name</Form.Label>
								<Form.Control
									type='text'
									{...register('name', { required: true })}
									isInvalid={errors.name}
								/>
							</Form.Group>
						</Col>
						<Col lg>
							<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
								<Form.Label>Body Text (HTML möglich)</Form.Label>
								<Form.Control
									as='textarea'
									rows={10}
									{...register('content', { required: true })}
									isInvalid={errors.content}
								/>
							</Form.Group>
						</Col>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={toggleEditShow}>
							Abbrechen
						</Button>
						<Button variant='primary' onClick={toggleEditShow} type='submit'>
							Speichern
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default MailTemplateRow;
