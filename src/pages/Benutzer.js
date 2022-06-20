import React from 'react';
import { Container } from 'react-bootstrap';
import CollapsibleTable from '../components/tables/User-Collapsible-Table.js';
import SiteTitle from '../components/SiteTitle.js';
import Alerts from '../components/Alerts.js';
import AccordionUserMenu from '../components/forms/AccordionUserMenu';

const Benutzer = () => {
	return (
		<div>
			<SiteTitle
				title='Benutzerverwaltung'
				subtitle='Unterüberschriften zu Benutzern'
				text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
			/>
			<Container>
				<Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' />
			</Container>
			<AccordionUserMenu />
			<CollapsibleTable />
		</div>
	);
};

export default Benutzer;
