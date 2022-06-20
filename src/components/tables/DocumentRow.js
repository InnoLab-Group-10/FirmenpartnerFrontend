import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiArrowToBottom, BiTrash } from 'react-icons/bi';
import {
	GrDocumentPdf,
	GrDocument,
	GrDocumentExcel,
	GrDocumentPpt,
	GrDocumentWord,
	GrDocumentImage,
} from 'react-icons/gr';
import { useDispatch } from 'react-redux';

import { fileDownload } from '../../store/file-thunks';

const DocumentRow = props => {
	const { entry } = props;
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	const IconHandler = extension => {
		switch (extension) {
			case 'pdf':
				return <GrDocumentPdf className='pdf' />;
			case 'docx':
			case 'doc':
				return <GrDocumentWord className='word' />;
			case 'xlsx':
			case 'xls':
			case 'csv':
				return <GrDocumentExcel className='excel' />;
			case 'ppt':
			case 'pptx':
				return <GrDocumentPpt className='ppt' />;
			case 'png':
			case 'jpeg':
			case 'gif':
			case 'jpg':
				return <GrDocumentImage className='pic' />;
			default:
				return <GrDocument className='misc' />;
		}
	};

	return (
		<>
		<tr>
			<td>{IconHandler(entry.name.split('.')[1].toLowerCase())}</td>
			<td>
				<Button
					variant='light'
					className='document-download-button'
					onClick={() => dispatch(fileDownload({ id: entry.id, name: entry.name }))}
				>
					{entry.name}
					<BiArrowToBottom />
				</Button>
			</td>
			<td>{new Date(entry.timestamp).toLocaleString()}</td>
			<td>
				<Button variant="danger" 
						className="table-icons table-delete-icon"
						onClick={handleShow}
				>
					<BiTrash/>
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

export default DocumentRow;
