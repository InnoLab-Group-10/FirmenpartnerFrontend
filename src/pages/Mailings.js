import React from 'react';
import SiteTitle from '../components/SiteTitle';
import { Container } from 'react-bootstrap';
import Mailinglist from '../components/tables/Mailinglist';
/*import Alerts from '../components/Alerts.js';*/

const Mailings = () => {
	return (
		<div>
			<SiteTitle
				title='Mailings'
				subtitle='Mailinglisten und E-Mail-Vorlagen'
				text='Hier können Sie Mailinglisten und Mailingvorlagen erstellen, bearbeiten und löschen.'
            />
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
            <Mailinglist/>
		</div>
	);
};

export default Mailings;
