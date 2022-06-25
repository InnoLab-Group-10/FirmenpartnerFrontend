import React from 'react';
import SiteTitle from '../components/SiteTitle';
import Documents from '../components/tables/Documents';
import { Container } from 'react-bootstrap';
import Alerts from '../components/Alerts.js';
import DocumentUpload from '../components/forms/DocumentUpload';

const Dokumente = () => {
	return (
		<div>
			<SiteTitle
				title='Dokumente'
				subtitle='Unterüberschrift zu Dokumenten'
				text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
			/>
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
			<DocumentUpload />
			<Documents />
		</div>
	);
};

export default Dokumente;
