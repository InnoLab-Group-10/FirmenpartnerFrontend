import React from 'react';
import SiteTitle from '../components/SiteTitle';
import DocumentTable from '../components/tables/DocumentTable';
import { Container } from 'react-bootstrap';
/*import Alerts from '../components/Alerts.js';*/
import DocumentUpload from '../components/forms/DocumentUpload';

const Dokumente = () => {
	return (
		<div>
			<SiteTitle
				title='Dokumentenverwaltung'
				subtitle='Hochladen, Bearbeiten und Löschen von Dokumenten'
				text='Hier können Sie Dokumente hochladen, bearbeiten und löschen. Zusätzlich können Sie sich in der Dokumentenliste einen Überblick über alle Dokumente verschaffen.'
			/>
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
			<DocumentUpload />
			<DocumentTable />
		</div>
	);
};

export default Dokumente;
