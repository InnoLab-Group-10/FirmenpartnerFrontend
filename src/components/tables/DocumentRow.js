import React from 'react';
import { Button } from 'react-bootstrap';
import { BiArrowToBottom } from 'react-icons/bi';
import {
	GrDocumentPdf,
	GrDocument,
	GrDocumentExcel,
	GrDocumentPpt,
	GrDocumentWord,
	GrDocumentImage,
} from 'react-icons/gr';

function IconHandler(props) {
	switch (props.icon) {
		case 'pdf':
			return <GrDocumentPdf className='pdf' />;
		case 'word':
			return <GrDocumentWord className='word' />;
		case 'excel':
			return <GrDocumentExcel className='excel' />;
		case 'ppt':
			return <GrDocumentPpt className='ppt' />;
		case 'jpg':
			return <GrDocumentImage className='pic' />;
		default:
			return <GrDocument className='misc' />;
	}
}

const DocumentRow = props => {
	let link = 'https://beispiel.com/';
	link += props.name;

	return (
		<>
			<tr>
				<td>
					<IconHandler icon={props.icon} />
				</td>
				<td>
					<Button
						download
						href={link}
						variant='light'
						className='document-download-button'
					>
						{props.name}
						<BiArrowToBottom />
					</Button>
				</td>
				<td>{props.author}</td>
				<td>{props.timestamp}</td>
			</tr>
		</>
	);
};

export default DocumentRow;
