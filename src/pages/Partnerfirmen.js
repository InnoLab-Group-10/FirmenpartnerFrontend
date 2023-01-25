import React from 'react';
import SiteTitle from '../components/SiteTitle';
import PartnerTable from '../components/tables/PartnerTable';
import { Container } from 'react-bootstrap';
/*import Alerts from '../components/Alerts';*/
import CreatePartnerForm from '../components/forms/CreaterPartnerForm';

const Partnerfirmen = () => {
	return (
		<div>
			<SiteTitle
				title='Partnerfirmenverwaltung'
				subtitle='Anlegen, Bearbeiten und Löschen von Partnerunternehmen'
				text='Hier finden Sie alle notwendigen Funktionen, um Partnerfirmen anzulegen, zu bearbeiten und zu löschen. Zusätzlich können Sie sich in der Partnerfirmenliste einen Überblick über alle Partnerfirmen verschaffen.'
			/>
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
			<CreatePartnerForm />
			<PartnerTable />
		</div>
	);
};

export default Partnerfirmen;
