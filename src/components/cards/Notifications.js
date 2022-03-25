import React from 'react';
import { Container } from 'react-bootstrap';
import Note from './Note';

const Notifications = () => {
	return (
		<Container>
			<h4 className='timeline-year'>Ungelesen</h4>
			<Note
				title='Typ 1'
				info='Erstellt am 07.12.21'
				text='Hier kann etwas stehen.'
				variant='light'
			/>
			<h4 className='timeline-year'>Gelesen</h4>
			<Note
				title='Typ 2'
				info='Erstellt am 07.12.21'
				text='Hier kann etwas stehen.'
				variant='light'
			/>
		</Container>
	);
};

export default Notifications;
