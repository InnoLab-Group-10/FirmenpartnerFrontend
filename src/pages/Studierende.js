import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CollapsibleTable from '../components/tables/Students-Collapsible-Table';
import { Container } from 'react-bootstrap';
/*import Alerts from '../components/Alerts';*/
import CreateStudentForm from '../components/forms/CreateStudentForm';

const Studierende = () => {
	return (
		<div>
			<SiteTitle
				title='Studierendenverwaltung'
				subtitle='Anlegen, Bearbeiten und Löschen von Studierenden'
				text='Hier finden Sie alle notwendigen Funktionen, um Studierende anzulegen, zu bearbeiten und zu löschen. Zusätzlich können Sie sich in der Studierendenliste einen Überblick über alle Studierende verschaffen.'
			/>
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
			<CreateStudentForm />
			<CollapsibleTable />
		</div>
	);
};

export default Studierende;
