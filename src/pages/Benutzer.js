import React from 'react';
import { Container } from 'react-bootstrap';
import UserTable from '../components/tables/UserTable.js';
import SiteTitle from '../components/SiteTitle.js';
/*import Alerts from '../components/Alerts.js';*/
import AccordionUserMenu from '../components/forms/AccordionUserMenu';

const Benutzer = () => {
	return (
		<div>
			<SiteTitle
				title='Benutzerverwaltung'
				subtitle='Anlegen, Bearbeiten und Löschen von Nutzern'
				text='Hier finden Sie alle notwendigen Funktionen, um Benutzer anzulegen, zu bearbeiten und zu löschen. Zusätzlich können Sie sich in der Benutzerliste einen Überblick über alle Benutzer verschaffen.'
			/>
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
			<AccordionUserMenu />
			<UserTable />
		</div>
	);
};

export default Benutzer;
